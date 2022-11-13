import { getCountryByNameApi } from '../../services/locations';
import { setCountry } from '../../store/reducers/countries_reducer';
import store from '../../store/store';

export default function getCountryByName(country) {
  getCountryByNameApi(country).then(async (response) => {
    store.dispatch(setCountry(response.data.data.country));
  });
}
