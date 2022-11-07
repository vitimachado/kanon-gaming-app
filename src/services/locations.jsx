import urls from '../constants/urls';
import { api } from './api';

export function getCountryByNameApi(country) {
  return api.get(`${urls.urls.countrybyname}`, {
    params: {
      countryName: country.toLowerCase(),
    },
  });
}

export function getCountriesByNamesApi(countries) {
  return api.post(`${urls.urls.countriesbynames}`, {
    countryNames: countries,
  });
}

export function getAllCountriesApi() {
  return api.get(`${urls.urls.allCountries}`);
}
