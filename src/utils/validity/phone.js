import { getDigitsOnly } from "utils/phoneTools";
import { getFormatedNumber } from "utils/phoneTools";

const DELETE_CONTENT_EVENT = "deleteContentBackward";
const MIN_DIGITS_LENGTH = 10;

const deletePreviousDigit = (string, indx) => {
  if (indx === 0) {
    return [string, indx];
  } else if (/[0-9]/.test(string[indx - 1])) {
    return [string.slice(0, indx - 1) + string.slice(indx), indx - 1];
  }
  return deletePreviousDigit(string, indx - 1);
};

const createCountMessage = (digitsLength, limitLength) =>
  `Add ${limitLength - digitsLength} or more digits of phone.`;

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

  const digitsFromValue = getDigitsOnly(value);
  const { length: digitsLength } = digitsFromValue;
  value = getFormatedNumber(digitsFromValue);

  const isDigitsIncomplite = digitsLength < MIN_DIGITS_LENGTH;

  switch (true) {
    case isLeftCharsContain:
      validityMessage = "Formated input. Use 0-9 digits only.";
      break;
    case isDigitsIncomplite:
      validityMessage = createCountMessage(digitsLength, MIN_DIGITS_LENGTH);
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
    isValidity: digitsLength < MIN_DIGITS_LENGTH ? false : true,
  };
};
