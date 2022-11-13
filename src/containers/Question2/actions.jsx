import { getCountriesByNamesApi } from '../../services/locations';
import { setCountries } from '../../store/reducers/countries_reducer';
import store from '../../store/store';

/*
 * Function to call the api to get country by names.
 * @countries: String[] - Array with country names.
 */
export default function getCountriesByNames(countries) {
  getCountriesByNamesApi(countries).then(async (response) => {
    store.dispatch(setCountries(response.data.data.countries));
  });
}
