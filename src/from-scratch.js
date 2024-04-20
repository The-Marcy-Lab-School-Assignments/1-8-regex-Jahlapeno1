const helloWorldRegex = (str) => {
  return /hello world/gi.test(str)
};

const hasAVowel = (str) => {
  return /[aeiou]/gi.test(str)
};

const hasCatsOrDogs = (str) => /(cats|dogs)/i.test(str);

const hasVowelStart = (str) => /^[aeiou]/i.test(str);

const hasPunctuationEnd = (str) => /[.!?]$/.test(str);

const hasNothingOrDigits = (str) => /^(\d+|)$/.test(str);

const hasNoFlippers = (str) => /^[^BCcDEHIKOoXxl]*$/.test(str);

const isValidEmail = (str) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str);

const isValidPhoneNumber = (str) => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]+[0-9]{3}[-\s\.]+[0-9]{4}$/.test(str);

const matchAllNumbers = (str) => {
  const emptyArr = []
  return str.match(/[0-9]+/g) === null ? emptyArr : str.match(/[0-9]+/g)
};

const matchAllNumbersAsNumbers = (str) => {
  const emptyArr = []
  return str.match(/[0-9]+/g) === null ? emptyArr : str.match(/[0-9]+/g).map(num => num = num * 1)
};

const matchAllWords = (str) => {
  const emptyArr = []
  return str.match(/[A-Z']+/gi) === null ? emptyArr : str.match(/[A-Z']+/gi)
};

const replaceAllNumbers = (str) => str.replace(/[0-9]+/g, '???');

const fixFileName = (str) => str.replace(/\s+/g, '_');

const nameRedacter = (str) => str.replace(/\w[A-Z]+/g, 'REDACTED');

const camelToSnakeCase = (str) => {
  const replace_to_snake = (letter) => `_${letter.toLowerCase()}`;
  return str.replace(/[A-Z]/g, replace_to_snake)
};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
