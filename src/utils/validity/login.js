const MIN_LENGTH = 3;
const MAX_LENGTH = 31;

export const loginValidity = ({ target }) => {
  const { length } = target.value;
  let { value } = target;
  let validityMessage = "";

  const isShort = length < MIN_LENGTH;
  const isLong = length > MAX_LENGTH;

  switch (true) {
    case length < MIN_LENGTH:
      validityMessage = `Add ${MIN_LENGTH - length} more characters.`;
      break;
    case length > MAX_LENGTH:
      validityMessage = `Limit length is ${MAX_LENGTH} characters.`;
      value = value.slice(0, MAX_LENGTH);
      break;
    default:
      validityMessage = "";
  }

  target.setCustomValidity(validityMessage);
  target.reportValidity();

  return {
    value,
    isValidity: !isShort && !isLong && target.checkValidity(),
  };
};
