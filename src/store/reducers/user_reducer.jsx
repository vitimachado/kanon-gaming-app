import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

const { actions } = userSlice;
export const { setUser, setToken, clearUser } = actions;
