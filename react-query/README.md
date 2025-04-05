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
