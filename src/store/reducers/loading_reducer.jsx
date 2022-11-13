import { createSlice } from '@reduxjs/toolkit';
import { loadingEnum } from '../../constants/actions';

const INITIAL_STATE = {
  loadingStatus: loadingEnum.idle,
  successApi: null,
  errorApi: null,
  snackbar: {
    statusCode: null,
    msg: null,
    duration: 3000,
    style: null,
  },
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
    setSuccessApi: (state, action) => {
      state.successApi = action.payload;
    },
    setErrorApi: (state, action) => {
      state.errorApi = action.payload;
    },
    setSnackbar: (state, action) => {
      state.snackbar = { ...INITIAL_STATE.snackbar, ...action.payload };
    },
    clearApiStatus: (state) => {
      state.successApi = null;
      state.errorApi = null;
    },
    clearSnackBar: (state) => {
      state.snackbar = {
        statusCode: null,
        msg: null,
        duration: 3000,
        style: null,
      };
    },
  },
});

const { actions } = loadingSlice;
// eslint-disable-next-line operator-linebreak
export const {
  setLoading,
  setIdleLoading,
  setSuccessApi,
  setErrorApi,
  setSnackbar,
  clearApiStatus,
  clearSnackBar,
} = actions;
