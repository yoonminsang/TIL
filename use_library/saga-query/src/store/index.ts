import { prepareStore } from 'saga-query';

import { api } from '../api';
import { configureStore } from '@reduxjs/toolkit';

export function setupStore() {
  const prepared = prepareStore({
    reducers: {},
    sagas: { api: api.saga() },
  });
  const reducer = prepared.reducer;
  const middleware = [...prepared.middleware];
  const store = configureStore({ reducer, middleware, devTools: true });
  prepared.run();
  return store;
}
