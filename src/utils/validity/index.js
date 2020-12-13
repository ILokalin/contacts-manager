import { loginValidity } from "./login";
import { nameValidity } from "./name";
import { passwordValidity } from "./password";
import { phoneValidity } from "./phone";
import { searchValidity } from "./searchValidity";

const handler = {
  login: loginValidity,
  name: nameValidity,
  password: passwordValidity,
  passwordCheck: passwordValidity,
  phone: phoneValidity,
  search: searchValidity,
  default: () => "",
};

export const validity = ({ target, nativeEvent, action }) => {
  const handle = handler[target.name] || handler.default;
  return handle({ target, action, nativeEvent });
};
