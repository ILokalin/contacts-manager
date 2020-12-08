import { formatPhoneDigitsOnly } from "utils";
import { MaskSelector } from "./maskSelector";

export const formatPhoneNumber = (digitsString) => {
  let mask = "default";
  const digits = [...digitsString] || [];

  for (const key in MaskSelector) {
    if (key === digits.slice(0, key.length).join("")) {
      mask = key;
      break;
    }
  }

  const getFormatedValue = () => {
    return [...MaskSelector[mask]]
      .map((maskedChar) => {
        if (maskedChar === "9") {
          return digits.shift();
        }
        return maskedChar;
      })
      .join("")
      .trim();
  };

  const getMaskLength = () => formatPhoneDigitsOnly(MaskSelector[mask]).length;

  return { getFormatedValue, getMaskLength };
};
