import { setAuthToken } from '../../services/api';
import { authenticateUserApi } from '../../services/user';
import { setCoins } from '../../store/reducers/slotMachine_reducer';
import { setToken, setUser } from '../../store/reducers/user_reducer';
import store from '../../store/store';

const handleError = (err) => {
  console.log('---handleLoginError err', err);
  // const { status } = err.response;
  // console.log('---handleLoginError', status, status === 401);
  // switch (status) {
  //   case undefined:
  //     break;

  //   case 401:
  //     break;

  //   default:
  //     break;
  // }
};

export default function authenticateUser(userObj) {
  console.log('authenticateUser userObj', userObj);
  authenticateUserApi(userObj)
    .then(async (response) => {
      console.log('authenticateUser response', response.data.data);
      const { user, token } = response.data.data;
      store.dispatch(setUser(user));
      store.dispatch(setCoins(user.coins));
      store.dispatch(setToken(token));
      localStorage.setItem('token', token);
      setAuthToken(token);
    })
    .catch((err) => handleError(err));
}
