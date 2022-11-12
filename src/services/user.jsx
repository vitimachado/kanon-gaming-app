import urls from '../constants/urls';
import { api } from './api';

export function authenticateUserApi(userObj) {
  return api.post(`${urls.urls.user_authenticate}`, {
    data: userObj,
  });
}

export function postUserRegisterApi(userObj) {
  return api.post(`${urls.urls.user_register}`, {
    data: userObj,
  });
}

export function getUserTokenApi() {
  return api.get(`${urls.urls.user_verifyToken}`);
}

export function verifytUserTokenApi() {
  return api
    .get(`${urls.urls.user_verifyToken}`)
    .then((res) => !!res.data.data?.email);
}

export function getUserByTokenApi() {
  return api.get(`${urls.urls.user_getUserByToken}`);
}
