import getCountryByNameApi from '../../services/locations';

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
      console.log('getCountryByName response', response);
    })
    .catch((err) => handleError(err));
}
