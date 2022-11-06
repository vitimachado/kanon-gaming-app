import urls from '../constants/urls';
import { api } from './api';

export default function getCountryByNameApi(country) {
  return api.get(urls.restcountries, {
    params: {
      countryName: country,
    },
  });
}
