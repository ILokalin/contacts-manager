import {
  formatPhoneString,
  DIGITS_ORDER_POSITIONS,
} from "utils/formatPhoneString";

const DELETE_CONTENT_EVENT = "deleteContentBackward";
const MASK_LENGTH = 17;
const PHONE_DIGITS_LIMIT = 11;
const START_CURSOR_POSITION = 1;
const CURSOR_ORDER_POSITIONS = [
  { add: 3, del: 0 },
  { add: 3, del: 1 },
  { add: 3, del: 1 },
  { add: 3, del: 3 },
  { add: 4, del: 4 },
  { add: 5, del: 5 },
  { add: 8, del: 5 },
  { add: 9, del: 5 },
  { add: 9, del: 8 },
  { add: 9, del: 9 },
  { add: 10, del: 10 },
  { add: 12, del: 10 },
  { add: 12, del: 12 },
  { add: 13, del: 13 },
  { add: 15, del: 13 },
  { add: 15, del: 15 },
  { add: 16, del: 16 },
  { add: 17, del: 16 },
];

const deletePreviousDigit = (string, indx) => {
  if (indx === 0) {
    return [string, indx];
  } else if (/[0-9]/.test(string[indx - 1])) {
    return [string.slice(0, indx - 1) + string.slice(indx), indx];
  }
  return deletePreviousDigit(string, indx - 1);
};

const createCountMessage = (digitsLength) =>
  `Add ${PHONE_DIGITS_LIMIT - digitsLength} more digits of phone.`;

export const phoneValidity = ({ target, nativeEvent }) => {
  let { selectionStart, value } = target;
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

  value = formatPhoneString(value);
  selectionStart = selectionStart > MASK_LENGTH ? MASK_LENGTH : selectionStart;
  const digits = value.slice(0, MASK_LENGTH).match(/[0-9]/g) || [];
  const { length: digitsLength } = digits;
  const isDigitsIncomplite = digitsLength < PHONE_DIGITS_LIMIT;

  switch (true) {
    case isLeftCharsContain:
      validityMessage = "Formated input. Use 0-9 digits only.";
      break;
    case isDigitsIncomplite:
      validityMessage = createCountMessage(digitsLength);
      break;
    default:
  }

  const digitsPosition =
    digitsLength === 0
      ? START_CURSOR_POSITION
      : DIGITS_ORDER_POSITIONS[digitsLength];
  const cursorPosition =
    digitsPosition <= selectionStart
      ? digitsPosition
      : CURSOR_ORDER_POSITIONS[selectionStart][
          isDeletedContent ? "del" : "add"
        ];
  target.setCustomValidity(validityMessage);
  target.reportValidity();
  setTimeout(() => {
    target.setSelectionRange(cursorPosition, cursorPosition);
  }, 0);

  return {
    value,
    isValidity: digitsLength < PHONE_DIGITS_LIMIT ? false : true,
  };
};
