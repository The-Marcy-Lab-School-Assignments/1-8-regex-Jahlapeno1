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

const matchAllNumbersAsNumbers = (str) => { };

const matchAllWords = (str) => { };

const replaceAllNumbers = (str) => { };

const fixFileName = (str) => { };

const nameRedacter = (str) => { };

const camelToSnakeCase = (str) => { };

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
