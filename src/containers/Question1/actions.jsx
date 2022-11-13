import { getCountryByNameApi } from '../../services/locations';
import { setCountry } from '../../store/reducers/countries_reducer';
import store from '../../store/store';

/**
 *  Method to handle the action to call api to get country by the name.
 *
 * @export
 * @param {string} country Name of the country.
 */
export default function getCountryByName(country) {
  getCountryByNameApi(country).then(async (response) => {
    store.dispatch(setCountry(response.data.data.country));
  });
}
