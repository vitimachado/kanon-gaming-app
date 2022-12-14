import urls from '../constants/urls';
import {
  clearSlotMachine,
  runSortMachine,
  setCoins,
  setPrize,
} from '../store/reducers/slotMachine_reducer';
import store from '../store/store';
import { api } from './api';

export function getCoinsApi() {
  return api
    .get(`${urls.urls.getCoins}`)
    .then((res) => store.dispatch(setCoins(res?.data?.data?.coins)));
}

export function setCoinsApi(coins) {
  return api
    .get(`${urls.urls.setCoins}`, {
      params: { coins },
    })
    .then((res) => store.dispatch(setCoins(res?.data?.data?.coins)));
}

export function sortMachineApi() {
  store.dispatch(clearSlotMachine());
  return api.get(`${urls.urls.sortMachine}`).then(
    (res) => {
      store.dispatch(setCoins(res?.data?.data?.oldCoins));
      store.dispatch(setPrize(res?.data?.data?.prize));
      store.dispatch(runSortMachine(res?.data?.data?.sortMachine));
    },
    // eslint-disable-next-line function-paren-newline
  );
}
