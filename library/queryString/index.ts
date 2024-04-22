const addQueryString = (params: URLSearchParams, name: string, value: string) => {
  params.set(name, value);
  return params;
};

const deleteQueryString = (params: URLSearchParams, name: string) => {
  params.delete(name);
  return params;
};

const addMultiQueryString = (params: URLSearchParams, name: string, value: string) => {
  params.append(name, value);
  return params;
};

const deleteMultiQueryString = (params: URLSearchParams, name: string, value: string) => {
  const values = params.getAll(name).filter((val) => val !== value);
  params.delete(name);
  values.forEach((val) => params.append(name, val));
  return params;
};
