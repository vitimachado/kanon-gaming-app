import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Snackbar from '../components/common/snackbar/snackbar';
import { getUserByTokenApi, getUserTokenApi } from '../services/user';
import { clearUser, setUser } from '../store/reducers/user_reducer';
import store from '../store/store';

export default function Guard({ children }) {
  const { snackbar } = useSelector((state) => state.loading);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const pathsVerifyToken = ['/q6'];

  const checkSession = () => {
    getUserTokenApi().then(() => {
      if (!user) {
        getUserByTokenApi()
          .then((res) => {
            store.dispatch(setUser(res.data.data.user));
            navigate('/q6');
          })
          .catch(() => null);
      }
    });
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
    </>
  );
}
