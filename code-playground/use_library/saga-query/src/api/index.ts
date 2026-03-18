import { createApi, requestMonitor, fetcher } from 'saga-query';

export const api = createApi();
api.use(requestMonitor());
api.use(api.routes());
api.use(fetcher({ baseUrl: 'https://api.github.com' }));

export const fetchRepo = api.get(`/repos/neurosnap/saga-query`, api.cache());
