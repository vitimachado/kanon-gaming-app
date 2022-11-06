import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducerCombined = combineReducers({});

const store = configureStore({
  reducer: reducerCombined,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
