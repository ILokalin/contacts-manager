export const formatPhoneDigitsOnly = (phoneString) => {
  const result = phoneString.match(/[0-9]/g) || [];
  return result.join("");
};
