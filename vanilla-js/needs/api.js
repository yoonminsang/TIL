export class Api {
  constructor() {
    // 여기 필수로 변경
    this.basicUrl = '';
  }

  async request(method, url, options) {
    const { body, searchParams, pathParams, headers } = options ?? {};

    const realUrl = addUrlParams(this.basicUrl + url, {
      pathParams,
      searchParams,
    });
    const option = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      credentials: 'include',
      body: body ? JSON.stringify(body) : undefined,
    };

    const res = await fetch(realUrl, option);
    if (!res.ok) throw new Error('api error', res);

    const data = await res.json();
    if (res.status >= 400) throw data;

    return data;
  }

  async get(url, options) {
    return this.request('GET', url, options);
  }

  async post(url, options) {
    return this.request('POST', url, options);
  }

  async patch(url, options) {
    return this.request('PATCH', url, options);
  }

  async put(url, options) {
    return this.request('PUT', url, options);
  }

  async delete(url, options) {
    return this.request('DELETE', url, options);
  }
}

const addUrlSearchParams = (url, params) => {
  if (!params) return url;
  const searchParams = new URLSearchParams(params);
  return `${url}?${searchParams.toString()}`;
};

const addUrlPathParams = (url, pathParams) => {
  if (!pathParams) return url;
  let changedUrl = url;
  Object.entries(pathParams).forEach(([key, _value]) => {
    const value = _value.toString();
    if (value) {
      changedUrl = changedUrl.replace(`:${key}`, value);
    }
  });
  return changedUrl;
};

const addUrlParams = (url, params) => {
  if (!params) return url;
  if (params.pathParams) url = addUrlPathParams(url, params.pathParams);
  if (params.searchParams) url = addUrlSearchParams(url, params.queryParams);
  return url;
};
