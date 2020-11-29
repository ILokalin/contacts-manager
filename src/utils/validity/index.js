import { nameValidity } from "utils/validity/nameValidity";
import { phoneValidity } from "utils/validity/phoneValidity";

const Handler = {
  name: nameValidity,
  phone: phoneValidity,
  default: () => "",
};

export const validity = ({ target, nativeEvent, compare }) => {
  const handle = Handler[target.name] || Handler.default;
  return handle({ target, compare, nativeEvent });
};
