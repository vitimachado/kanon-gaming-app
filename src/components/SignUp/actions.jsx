import { postUserRegisterApi } from '../../services/user';

export default function postUserRegister(userObj) {
  return postUserRegisterApi(userObj);
}
