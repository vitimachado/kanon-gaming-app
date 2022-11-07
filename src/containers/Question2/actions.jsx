import { getCountriesByNamesApi } from '../../services/locations';
import { setCountries } from '../../store/reducers/countries_reducer';
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

export default function getCountriesByNames(countries) {
  console.log('getCountriesByNames response', countries);
  getCountriesByNamesApi(countries)
    .then(async (response) => {
      console.log('getCountriesByNames response', response.data.data.countries);
      store.dispatch(setCountries(response.data.data.countries));
    })
    .catch((err) => handleError(err));
}

export function TestegetCountriesByNames(countries) {
  console.log('getCountriesByNames response', countries);
}
