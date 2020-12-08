import { formatPhoneDigitsOnly } from "utils";
import { formatPhoneNumber } from "./../phoneTools/formatPhoneNumber";

const DELETE_CONTENT_EVENT = "deleteContentBackward";
// const MaskSelector = {
//   1: "+9 999 999 9999",
//   375: "+999 99 999 99 99",
//   380: "+999 99 999 99 99",
//   7: "+9 999 999 99 99",
//   43: "+99 9999 99999",
//   default: "+9 999 999 9999",
// };

// const getFormatValue = (mask, digits) => {
//   return [...MaskSelector[mask]]
//     .map((maskedChar) => {
//       if (maskedChar === "9") {
//         return digits.shift();
//       }
//       return maskedChar;
//     })
//     .join("")
//     .trim();
// };

const deletePreviousDigit = (string, indx) => {
  if (indx === 0) {
    return [string, indx];
  } else if (/[0-9]/.test(string[indx - 1])) {
    return [string.slice(0, indx - 1) + string.slice(indx), indx - 1];
  }
  return deletePreviousDigit(string, indx - 1);
};

const createCountMessage = (digitsLength, limitLength) =>
  `Add ${limitLength - digitsLength} more digits of phone.`;

export const phoneValidity = ({ target, nativeEvent }) => {
  let { selectionStart, value } = target;
  const { length } = value;
  const { defaultValue } = nativeEvent.target;
  const isDeletedContent = nativeEvent.inputType === DELETE_CONTENT_EVENT;
  const isNothingSelected = selectionStart === target.selectionEnd;
  // eslint-disable-next-line no-useless-escape
  const isLeftCharsContain = /[^\+^0-9^\-^\(^\)^\s]/g.test(value);
  let validityMessage = "";

  if (isDeletedContent && isNothingSelected) {
    if (!/[0-9]/.test(defaultValue[selectionStart])) {
      [value, selectionStart] = deletePreviousDigit(value, selectionStart);
    }
  }

  const digitsFromValue = formatPhoneDigitsOnly(value);
  const { length: digitsLength } = digitsFromValue;

  const formatedPhone = formatPhoneNumber(digitsFromValue);
  value = formatedPhone.getFormatedValue();
  const limitLength = formatedPhone.getMaskLength();
  const isDigitsIncomplite = digitsLength < limitLength;

  switch (true) {
    case isLeftCharsContain:
      validityMessage = "Formated input. Use 0-9 digits only.";
      break;
    case isDigitsIncomplite:
      validityMessage = createCountMessage(digitsLength, limitLength);
      break;
    default:
  }
  target.setCustomValidity(validityMessage);
  target.reportValidity();

  let pos = length < value.length ? selectionStart + 1 : selectionStart;
  setTimeout(() => {
    target.setSelectionRange(pos, pos);
  }, 0);

  return {
    value,
    isValidity: digitsLength < limitLength ? false : true,
  };
};
