export const DIGITS_ORDER_POSITIONS = [1, 3, 4, 5, 8, 9, 10, 12, 13, 15, 16];
export const FORMAT_MASK = "+ (   )    -  -  ";

export const formatPhoneString = (string) => {
  const digits = string.match(/[0-9]/g) || [];
  const result = FORMAT_MASK.split("");

  digits.forEach((digit, indx) => {
    result[DIGITS_ORDER_POSITIONS[indx]] = digit;
  });

  return result.join("");
};
