const MIN_LENGTH = 3;
const MAX_LENGTH = 31;

export const nameValidity = ({ target }) => {
  const { length } = target.value;
  let isValidity = false;
  let value = target.value;
  let validityMessage = "";

  switch (true) {
    case length < MIN_LENGTH:
      validityMessage = `Add ${MIN_LENGTH - length} more characters.`;
      break;
    case length > MAX_LENGTH:
      validityMessage = `Limit length is ${MAX_LENGTH} characters.`;
      value = value.slice(0, MAX_LENGTH);
      break;
    default:
      isValidity = true;
      validityMessage = "";
  }

  target.setCustomValidity(validityMessage);
  target.reportValidity();
  return {
    value,
    isValidity,
  };
};
