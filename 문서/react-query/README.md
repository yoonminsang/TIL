## is~~관련 정리

- queryStatus와 fetchStatus를 조합하면 is~~을 만들 수 있다.
- 캐싱된 데이터가 있을 때(gcTime 만료안됌, staleTime 만료됌) background refetch해도 status는 success다.

```
type QueryStatus = 'pending' | 'error' | 'success';
type FetchStatus = 'fetching' | 'paused' | 'idle';
```

- isFetching: queryFn이 실행중이면 true(background refetch 포함)(명시적인 refetch 로딩은 isRefetching으로 확인해야한다.)
- isLoading: 첫 데이터 로딩중`isFetching && isPending`
- isPending: cached된 데이터가 없을 때 true다. 데이터 로딩 여부와 상관이 없다.
  - enabled가 false여도 isPending은 true이다. 왜냐하면 cached된 data가 있는지 여부를 판단하는거니까

```
    /**
     * A derived boolean from the `fetchStatus` variable, provided for convenience.
     * - `true` whenever the `queryFn` is executing, which includes initial `pending` as well as background refetch.
     */
    isFetching: boolean;
    /**
     * Is `true` whenever the first fetch for a query is in-flight.
     * - Is the same as `isFetching && isPending`.
     */
    isLoading: boolean;
    /**
     * Will be `pending` if there's no cached data and no query attempt was finished yet.
     */
    isPending: boolean;
```

## useMutation 활용하기

- useMutation 사용하는데 api는 다른데 onSuccess,OnError가 비슷하게 중복될때는 "합성 훅 패턴(Composite Hook Pattern)" 또는 "계층형 훅 패턴(Layered Hook Pattern)" 사용하기

```
const useBaseMutation = <TData = unknown, TVariables = unknown>(
  mutationFn: (variables: TVariables) => Promise<TData>
) => {
  return useMutation({
    mutationFn,
    onSuccess: () => {
      // ~~
    },
    onError: (err) => {
      // ~~
    },
  });
};

// 필요에 따라 onSuccess, onError ,on~~ 등의 처리 가능
export const use~~Mutation = () => {
  return use~~Mutation(() => api);
};
```

```
interface Base~~Options<TData, TVariables> {
  onSuccess?: (data: TData, variables: TVariables) => void | Promise<void>;
  onBack?: () => void;
}

export const useBase~~MutationWithContextHolder = <TData, TVariables>({
  onSuccess,
  onBack,
  mutationFn,
}: Base~~Options<TData, TVariables> & {
  mutationFn: (variables: TVariables) => Promise<TData>;
}) =>

```

쿼리팩토리
https://5kdk.github.io/blog/2025/04/04/query-factory