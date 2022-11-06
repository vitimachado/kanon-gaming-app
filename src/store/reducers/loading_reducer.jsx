import { createSlice } from '@reduxjs/toolkit';
import { loadingEnum } from '../../constants/actions';

const INITIAL_STATE = {
  loadingStatus: loadingEnum.idle,
  errorMessage: null,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state) => {
      state.loadingStatus = loadingEnum.running;
    },
    setIdleLoading: (state) => {
      state.loadingStatus = loadingEnum.idle;
    },
  },
});

const { actions } = loadingSlice;
export const { setLoading, setIdleLoading } = actions;
