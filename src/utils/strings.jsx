const filterArrayObjByStartsWith = (array, ref, inputValue) =>
  array.filter(
    (data) => data[ref].toLowerCase().startsWith(inputValue.toLowerCase()),
    // eslint-disable-next-line function-paren-newline
  );

function validateLengthBoolean(string, min, max) {
  // eslint-disable-next-line prefer-regex-literals, no-invalid-regexp
  const regex = new RegExp(`^.{${min},${max}}`);
  return regex.test(string);
}

function validateLength(string, min, max) {
  // eslint-disable-next-line no-nested-ternary
  return string?.length < min ? -1 : string?.length > max ? 1 : 0;
}

function validateEmail(email) {
  // eslint-disable-next-line prefer-regex-literals, no-invalid-regexp
  const regex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
  return regex.test(email);
}

const getLocalStorageAndParseToken = () => {
  const token = localStorage.getItem('token');
  try {
    return JSON.parse(token);
  } catch (error) {
    return token.replace('"', '');
  }
};

export {
  validateEmail,
  validateLengthBoolean,
  validateLength,
  getLocalStorageAndParseToken,
  filterArrayObjByStartsWith,
};
