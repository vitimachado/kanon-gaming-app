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
  console.log(random, array[random]);
  return array[random];
}

export {
  everyObjectValuesIsLike,
  someObjectValuesIsLike,
  findAndUpdateTSomePropertyValue,
  generateKey,
  randomArrayValue,
};