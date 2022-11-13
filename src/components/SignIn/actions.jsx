import { setAuthToken } from '../../services/api';
import { authenticateUserApi } from '../../services/user';
import { setCoins } from '../../store/reducers/slotMachine_reducer';
import { setToken, setUser } from '../../store/reducers/user_reducer';
import store from '../../store/store';

export default function authenticateUser(userObj) {
  authenticateUserApi(userObj).then(async (response) => {
    const { user, token } = response.data.data;
    store.dispatch(setUser(user));
    store.dispatch(setCoins(user.coins));
    store.dispatch(setToken(token));
    localStorage.setItem('token', token);
    setAuthToken(token);
  });
}
