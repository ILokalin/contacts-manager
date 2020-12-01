import { nameValidity } from "utils/validity/name";
import { phoneValidity } from "utils/validity/phone";
import { passwordValidity } from "utils/validity/password";
import { loginValidity } from "utils/validity/login";

const Handler = {
  name: nameValidity,
  phone: phoneValidity,
  login: loginValidity,
  password: passwordValidity,
  passwordCheck: passwordValidity,
  search: nameValidity,
  default: () => "",
};

export const validity = ({ target, nativeEvent, action }) => {
  const handle = Handler[target.name] || Handler.default;
  return handle({ target, action, nativeEvent });
};
