import { getAllCountriesApi } from '../../services/locations';
import { setAllCountries } from '../../store/reducers/countries_reducer';
import store from '../../store/store';

/*
 * Function to call the api to get all countries.
 */
export default function getAllCountries() {
  getAllCountriesApi().then(async (response) => {
    store.dispatch(setAllCountries(response.data.data.countries));
  });
}
