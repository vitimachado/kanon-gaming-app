import { validateEmail, validateLength } from './strings';

const textLengthValidationMsg = (string, ref, min, max) => {
  const res = validateLength(string, min, max);
  switch (res) {
    case -1:
      return `The ${ref} must be longer than ${min} letters.`;
    case 1:
      return `The ${ref} must be less than ${max} letters.`;

    default:
      return null;
  }
};

// eslint-disable-next-line no-confusing-arrow
const emailValidationMsg = (email) =>
  // eslint-disable-next-line no-nested-ternary
  email === null ? null : validateEmail(email) ? null : 'Write a valid email.';

export { textLengthValidationMsg, emailValidationMsg };
