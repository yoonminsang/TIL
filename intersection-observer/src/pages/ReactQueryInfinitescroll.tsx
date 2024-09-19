import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Children, ReactNode, useEffect, useRef } from 'react';

export function ReactQueryInfiniteScroll() {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage } = useGetInfinitePosts();

  const bottomCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });
    });

    if (bottomCardRef.current) {
      io.observe(bottomCardRef.current);
    }

    return () => {
      io.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div>
      <h1>InfiniteScroll</h1>
      {data ? (
        <>
          <CardList>
            <EmptyChildrenFallback fallback={<CardEmpty />}>
              {data.map((v) => (
                <Card {...v} key={v.id} />
              ))}
            </EmptyChildrenFallback>
            <div ref={bottomCardRef} />
          </CardList>
          {isFetchingNextPage && <LoadMoreLoading />}
        </>
      ) : (
        <CardInitialLoading />
      )}
    </div>
  );
}

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

function Card({ title, body }: Post) {
  return (
    <div
      css={css`
        width: 200px;
        height: 200px;
        border: 1px solid gray;
        border-radius: 12px;
        overflow: hidden;
        padding: 16px;
      `}
    >
      <h3>{title}</h3>
      <div style={{ overflow: 'hidden' }}>{body}</div>
    </div>
  );
}

function CardInitialLoading() {
  return <div style={{ width: '100%', height: '200px', backgroundColor: 'blue' }}>initial loading...</div>;
}

function LoadMoreLoading() {
  return <div style={{ width: '100%', height: '200px', backgroundColor: 'red' }}>Load more...</div>;
}

function CardEmpty() {
  return <div>empty...</div>;
}

const useGetInfinitePosts = () => {
  return useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: async ({ pageParam }) => {
      return await getPosts({ page: pageParam });
    },
    initialPageParam: 1 as number,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      // 마지막 페이지에서 추가로 불러올 데이터가 있으면 페이지 넘버를 리턴, 없으면 undefined 리턴
      return lastPage.length > 0 ? lastPageParam + 1 : undefined;
    },
    select: (data) => data.pages.flat(),
  });
};

// https://jsonplaceholder.typicode.com/posts?_page=3&_limit=10
const getPosts = ({ page }: { page: number }) => {
  return axios
    .get<Post[]>(`https://jsonplaceholder.typicode.com/posts`, {
      params: { _page: page, _limit: 10 },
    })
    .then((v) => v.data);
};

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function EmptyChildrenFallback({ fallback, children }: { fallback: ReactNode; children: ReactNode }) {
  const hasChildren = Children.toArray(children).length > 0;

  if (!hasChildren) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
