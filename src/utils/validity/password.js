const IS_SHORT = "PASSWORD/IS_SHORT";
const IS_LONG = "PASSWORD/IS_LONG";
const IS_LOWCASE = "PASSWORD/IS_LOWCASE";
const IS_UPCASE = "PASSWORD/IS_UPCASE";
const IS_DIGITS = "PASSWORD/IS_DIGITS";
const IS_SPECIAL = "PASSWORD/IS_SPECIAL";
const IS_NOT_EQUAL = "PASSWORD/IS_NOT_EQUAL";
const MIN_LENGHT = 6;
const MAX_LENGTH = 16;

const Messages = {
  [IS_SHORT]: (length) =>
    `Add ${MIN_LENGHT - length} more symbols of password.`,
  [IS_LONG]: () => `Password should not be longer than ${MAX_LENGTH} symbols.`,
  [IS_LOWCASE]: () => "Requere use one or more lowcase characters a-z.",
  [IS_UPCASE]: () => "Requere use one or more upcase characters A-Z.",
  [IS_DIGITS]: () => "Requere use one or more digit 0-9.",
  [IS_SPECIAL]: () => "Use one or more special chars (#, @, %, ... etc)",
  [IS_NOT_EQUAL]: () => "Passowrds should be equals.",
  DEFAULT: () => "",
};

const createValidity = (target, action) => {
  const { value } = target;
  const { length } = value;
  const { type, payload } = action;

  switch (true) {
    case length < MIN_LENGHT:
      return IS_SHORT;
    case length > MAX_LENGTH:
      return IS_LONG;
    case !/[0-9]/.test(value) && type === "CREATE":
      return IS_DIGITS;
    case !/[A-Z]/.test(value) && type === "CREATE":
      return IS_UPCASE;
    case !/[a-z]/.test(value) && type === "CREATE":
      return IS_LOWCASE;
    case !/[\W_]/.test(value) && type === "CREATE":
      return IS_SPECIAL;
    case value !== payload && type === "CHECK":
      return IS_NOT_EQUAL;
    default:
      return "DEFAULT";
  }
};

export const passwordValidity = ({ target, action = {} }) => {
  const {
    value,
    value: { length },
  } = target;
  const validityMessage = Messages[createValidity(target, action)](length);

  target.setCustomValidity(validityMessage);
  target.reportValidity();

  return {
    value: value,
    isValidity: !Boolean(validityMessage),
  };
};
