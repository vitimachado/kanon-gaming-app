/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
const everyObjectValuesIsLike = (object, value) =>
  Object.values(object).every((item) => item === value);

/* eslint-disable no-underscore-dangle */
const someObjectValuesIsLike = (object, value) =>
  Object.values(object).some((item) => item === value);

const findAndUpdateTSomePropertyValue = (
  object,
  refToFind,
  valueOfFind,
  changeProperty,
  changeValue,
) =>
  object.map(
    // eslint-disable-next-line no-confusing-arrow
    (item) =>
      item[refToFind] === valueOfFind
        ? { ...item, [changeProperty]: changeValue }
        : item,
    // eslint-disable-next-line function-paren-newline
  );

const generateKey = (pre) => `${pre}_${new Date().getTime()}`;

function randomArrayValue(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const createDefaultObjectByKeys = (arr, propertie, value) =>
  arr.reduce((acc, key) => ({ ...acc, [key[propertie]]: value }), {});

/**
 *  Method  to check if Array is Ok.
 *
 * @param {String[]} array Array of string with the items.
 * @param {Number} length Number of the length.
 */
const checkIsArrayOk = (array, length) =>
  Array.isArray(array) &&
  array?.length === length &&
  !array?.some((data) => data === null);

export {
  everyObjectValuesIsLike,
  someObjectValuesIsLike,
  findAndUpdateTSomePropertyValue,
  createDefaultObjectByKeys,
  generateKey,
  randomArrayValue,
  checkIsArrayOk,
};
