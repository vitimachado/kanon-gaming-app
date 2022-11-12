import { postUserRegisterApi } from '../../services/user';

const handleError = (err) => {
  console.log('---handleLoginError err', err);
  // const { status } = err.response;
  // console.log('---handleLoginError', status, status === 401);
  // switch (status) {
  //   case undefined:
  //     break;

  //   case 401:
  //     break;

  //   default:
  //     break;
  // }
};

export default function postUserRegister(userObj) {
  console.log('postUserRegister userObj', userObj);
  postUserRegisterApi(userObj)
    .then(async (response) => {
      console.log('postUserRegister response', response);
      // store.dispatch(setAllCountries(response.data.data.countries));
    })
    .catch((err) => handleError(err));
}
