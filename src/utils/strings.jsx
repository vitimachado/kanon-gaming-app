const filterArrayObjByStartsWith = (array, ref, inputValue) =>
  array.filter(
    (data) => data[ref].toLowerCase().startsWith(inputValue.toLowerCase()),
    // eslint-disable-next-line function-paren-newline
  );

export {
  // eslint-disable-next-line import/prefer-default-export
  filterArrayObjByStartsWith,
};
