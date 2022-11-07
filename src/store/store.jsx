import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { countriesSlice } from './reducers/countries_reducer';
import { loadingSlice } from './reducers/loading_reducer';

const reducerCombined = combineReducers({
  loading: loadingSlice.reducer,
  countries: countriesSlice.reducer,
});

const store = configureStore({
  reducer: reducerCombined,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
