import { css } from '@emotion/react';
import styled from '@emotion/styled';
import axios from 'axios';
import { Children, ReactNode, useEffect, useRef, useState } from 'react';

export function InfiniteScroll() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Post[] | undefined>(undefined);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true); // 추가: 더 불러올 데이터가 있는지 여부

  const bottomCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoading && hasMore) {
          console.log('isIntersecting', entry);
          setPage((page) => page + 1);
        }
      });
    }, {});

    if (bottomCardRef.current) {
      io.observe(bottomCardRef.current);
    }

    return () => {
      io.disconnect();
    };
  }, [hasMore, isLoading]);

  useEffect(() => {
    (async () => {
      if (page === 1 && data && data.length > 0) return; // 초기 API 중복 호출 방지

      try {
        setIsLoading(true);
        const { data } = await getPosts({ page });
        setData((prevData) => {
          if (data.length === 0) {
            setHasMore(false); // 불러온 데이터가 없으면 더 이상 로드하지 않음
            return prevData ?? [];
          }
          if (!prevData) {
            return data;
          }
          return [...prevData, ...data];
        });
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

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
          {isLoading && <LoadMoreLoading />}
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

// https://jsonplaceholder.typicode.com/posts?_page=3&_limit=10
const getPosts = ({ page }: { page: number }) => {
  return axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`, {
    params: { _page: page, _limit: 10 },
  });
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
