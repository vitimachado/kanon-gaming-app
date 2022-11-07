import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  country: null,
  countries: null,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: INITIAL_STATE,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
  },
});

const { actions } = countriesSlice;
export const { setCountry, setCountries } = actions;
