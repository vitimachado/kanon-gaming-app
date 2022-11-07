import { getCountryByNameApi } from '../../services/locations';
import { setCountry } from '../../store/reducers/countries_reducer';
import store from '../../store/store';

const handleError = (err) => {
  console.log('---handleLoginError err', err.code);
  const { status } = err.response;
  console.log('---handleLoginError', status, status === 401);
  switch (status) {
    case undefined:
      break;

    case 401:
      break;

    default:
      break;
  }
};

export default function getCountryByName(country) {
  getCountryByNameApi(country)
    .then(async (response) => {
      console.log('getCountryByName response', response.data.data.country);
      store.dispatch(setCountry(response.data.data.country));
    })
    .catch((err) => handleError(err));
}
