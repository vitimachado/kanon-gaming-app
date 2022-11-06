import axios from 'axios';
import {
  setIdleLoading,
  setLoading,
} from '../../store/reducers/loading_reducer';
import store from '../../store/store';

const api = axios.create({
  baseURL: 'http://192.168.1.172:3000', // 'http://10.255.1.27:3000', //process.env.REACT_APP_HAMMERHEADSHARK,
  timeout: 5000,
});

const apiBridge = axios.create({
  baseURL: 'http://192.168.1.172:8080', // 'http://10.255.1.27:8080', //process.env.REACT_APP_BRIDGE,
  timeout: 5000,
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    store.dispatch(setLoading());
    console.log('\n\n\n\n\n\n...request', config?.url);
    return config;
  },
  (error) => {
    store.dispatch(setIdleLoading());
    console.log('request error');
    return Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    store.dispatch(setIdleLoading());
    console.info('response');
    return response;
  },
  (error) => {
    store.dispatch(setIdleLoading());
    console.info('response error');
    return Promise.reject(error);
  },
);

const setAuthToken = (token) => {
  api.defaults.headers.common.Authorization = '';
  delete api.defaults.headers.common.Authorization;

  if (token) {
    api.defaults.headers.common.Authorization = `${token}`;
  }
};

export { api, apiBridge, setAuthToken };
