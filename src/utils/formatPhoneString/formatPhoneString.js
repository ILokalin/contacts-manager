import { DIGITS_ORDER_POSITIONS, FORMAT_MASK } from "./types";

export const formatPhoneString = (string) => {
  const digits = string.match(/[0-9]/g) || [];
  const result = FORMAT_MASK.split("");

  digits.forEach((digit, indx) => {
    result[DIGITS_ORDER_POSITIONS[indx]] = digit;
  });

  return result.join("");
};
