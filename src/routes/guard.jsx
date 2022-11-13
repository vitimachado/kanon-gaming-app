import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Snackbar from '../components/common/snackbar/snackbar';
import { getUserByTokenApi, getUserTokenApi } from '../services/user';
import { setCoins } from '../store/reducers/slotMachine_reducer';
import { clearUser, setUser } from '../store/reducers/user_reducer';
import useLocalStorage from '../utils/localStorageHook';
import store from '../store/store';
import Loading from '../components/common/loading/loading';

export default function Guard({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [token] = useLocalStorage('token');
  const { snackbar } = useSelector((state) => state.loading);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const pathsVerifyToken = ['/q4and5', '/q6'];

  const checkUserAndGoToMainPage = () => {
    if (!user) {
      getUserByTokenApi()
        .then((res) => {
          store.dispatch(setUser(res.data.data.user));
          store.dispatch(setCoins(res.data.data.user.coins));
          navigate('/q6');
        })
        .catch(() => null);
    }
  };

  const checkSession = () => {
    if (token) {
      checkUserAndGoToMainPage();
    } else {
      getUserTokenApi().then(() => checkUserAndGoToMainPage());
    }
  };

  useEffect(() => {
    if (snackbar.statusCode === 401 || snackbar.statusCode === '401') {
      localStorage.removeItem('token');
      store.dispatch(clearUser());
      navigate('/q4and5');
    }
  }, [snackbar]);

  useEffect(() => {
    if (pathsVerifyToken.includes(location.pathname)) {
      checkSession();
    }
  }, []);

  return (
    <>
      {children}
      <Snackbar />
      <Loading />
    </>
  );
}
