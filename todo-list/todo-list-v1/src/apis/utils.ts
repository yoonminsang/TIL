export const addUrlPathParams = (url: string, pathParams?: Record<string, number | string>): string => {
  if (!pathParams) return url;
  Object.entries(pathParams).forEach(([key, value]) => {
    if (value && value.toString) {
      url = url.replace(`:${key}`, value.toString());
    }
  });
  return url;
};
