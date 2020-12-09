export const getDigitsOnly = (phoneString) => {
  const result = phoneString.match(/[0-9]/g) || [];
  return result.join("");
};
