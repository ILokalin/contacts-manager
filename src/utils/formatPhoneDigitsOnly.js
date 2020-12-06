export const formatPhoneDigitsOnly = (phoneString) => {
  return phoneString.match(/[0-9]/g).join("");
};
