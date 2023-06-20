const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    throw new 'String length is not appropriate. It must be between 1 and 10 characters.'();
  }
  return str.length;
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

export { stringLength, reverseString };
