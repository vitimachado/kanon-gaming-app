import { getAllCountriesApi } from '../../services/locations';
import { setAllCountries } from '../../store/reducers/countries_reducer';
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

export default function getAllCountries() {
  getAllCountriesApi()
    .then(async (response) => {
      console.log('getCountriesByNames response', response.data.data.countries);
      store.dispatch(setAllCountries(response.data.data.countries));
    })
    .catch((err) => handleError(err));
}
