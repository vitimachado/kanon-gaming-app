import axios from 'axios';
import {
  setIdleLoading,
  setLoading,
  setSnackbar,
} from '../../store/reducers/loading_reducer';
import store from '../../store/store';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_SERVER, // 'http://localhost:3001',
  timeout: 5000,
});

const setAuthToken = (token) => {
  api.defaults.headers.common.Authorization = '';
  delete api.defaults.headers.common.Authorization;

  if (token) {
    api.defaults.headers.common.Authorization = `${token}`;
  }
};

const getAuthToken = () => api.defaults.headers.common.Authorization;

const getAndSetAuthToken = () => {
  const authToken = getAuthToken();
  if (authToken) return getAuthToken();
  const token = localStorage.getItem('token');
  if (!getAuthToken() && !!token) {
    setAuthToken(token);
    return getAuthToken();
  }
  return null;
};

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    store.dispatch(setLoading());
    config.headers.Authorization = getAndSetAuthToken();
    return config;
  },
  (error) => {
    store.dispatch(setIdleLoading());
    return Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    store.dispatch(setIdleLoading());
    return response;
  },
  (error) => {
    store.dispatch(setIdleLoading());
    store.dispatch(
      setSnackbar({
        statusCode: error.response?.data?.statusCode,
        msg: error.response?.data?.error,
        style: {
          backgroundColor: 'red',
        },
      }),
    );
    return Promise.reject(error);
  },
);

export { api, setAuthToken, getAuthToken, getAndSetAuthToken };
