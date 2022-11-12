import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { countriesSlice } from './reducers/countries_reducer';
import { loadingSlice } from './reducers/loading_reducer';
import { slotMachineSlice } from './reducers/slotMachine_reducer';
import { userSlice } from './reducers/user_reducer';

const reducerCombined = combineReducers({
  loading: loadingSlice.reducer,
  countries: countriesSlice.reducer,
  user: userSlice.reducer,
  slotMachine: slotMachineSlice.reducer,
});

const store = configureStore({
  reducer: reducerCombined,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
