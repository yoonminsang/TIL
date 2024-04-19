export const addUrlPathParams = (url: string, pathParams?: Record<string, number | string>): string => {
  if (!pathParams) return url;
  let changedUrl = url;
  Object.entries(pathParams).forEach(([key, value]) => {
    if (value && value.toString()) {
      changedUrl = changedUrl.replace(`:${key}`, value.toString());
    }
  });
  return changedUrl;
};
