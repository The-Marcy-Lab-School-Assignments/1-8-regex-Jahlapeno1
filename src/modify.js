const swapAllCases = (str) => {
  const swapCase = (char) => (/[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase());
  return str.replace(/[a-zA-Z]/g, swapCase);
};

module.exports = {
  swapAllCases,
};
