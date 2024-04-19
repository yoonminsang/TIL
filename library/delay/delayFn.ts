/**
 * @description 함수에 의도적으로 delay를 주고 싶은 경우 사용합니다.
 * @param fn api 함수
 * @param delay 최소 로딩시간(default 300)
 * @returns apiFn
 * 
 * @example
 * ```ts
 * export const useSuspenseGetMyCompanies = () =>
     useSuspenseQuery({
       queryKey: RQ_MY_KEY.companies,
       queryFn: () => delayFn(() => myApi.getCompanies()),
    });
 * ```
 */
export const delayFn = async <T>(fn: () => Promise<T> | T, delay = 300) => {
  const [data] = await Promise.all([fn(), new Promise((resolve) => setTimeout(resolve, delay))]);
  return data;
};
