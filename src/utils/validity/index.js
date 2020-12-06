import { nameValidity } from "./name";
import { phoneValidity } from "./phone";
import { passwordValidity } from "./password";
import { loginValidity } from "./login";
import { searchValidity } from "./searchValidity";

const Handler = {
  name: nameValidity,
  phone: phoneValidity,
  login: loginValidity,
  password: passwordValidity,
  passwordCheck: passwordValidity,
  search: searchValidity,
  default: () => "",
};

export const validity = ({ target, nativeEvent, action }) => {
  const handle = Handler[target.name] || Handler.default;
  return handle({ target, action, nativeEvent });
};
