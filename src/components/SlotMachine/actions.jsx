/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import { tableMultiplierSorted } from '../../constants/slotMachine';
import { postUserRegisterApi } from '../../services/user';
import { randomArrayValue } from '../../utils/objects';

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

export const getSortedSlotTranslatePosition = (name, reelIndex) => {
  switch (name) {
    case 'apple':
      return reelIndex === 1
        ? tableMultiplierSorted[3]
        : reelIndex === 2
        ? tableMultiplierSorted[randomArrayValue([1, 5])]
        : tableMultiplierSorted[randomArrayValue([1, 3])];
    case 'banana':
      return reelIndex === 1
        ? tableMultiplierSorted[randomArrayValue([5, 6])]
        : tableMultiplierSorted[6];
    case 'cherry':
      return reelIndex === 1
        ? tableMultiplierSorted[1]
        : tableMultiplierSorted[4];
    case 'lemon':
      return reelIndex === 1
        ? tableMultiplierSorted[randomArrayValue([2, 4])]
        : reelIndex === 2
        ? tableMultiplierSorted[randomArrayValue([2, 3])]
        : tableMultiplierSorted[randomArrayValue([2, 5])];

    default:
      return null;
  }
};
