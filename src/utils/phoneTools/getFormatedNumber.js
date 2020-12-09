import { MaskSelector } from "./maskSelector";

export const getFormatedNumber = (digitsString) => {
  let mask = "default";
  const digits = [...digitsString] || [];

  for (const key in MaskSelector) {
    if (key === digits.slice(0, key.length).join("")) {
      mask = key;
      break;
    }
  }

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
