import { TO_REGISTRATION, TO_LOGIN, USER_LOGIN } from "redux/types";

export const turnToRegistration = () => ({ type: TO_REGISTRATION });
export const turnToLogin = () => ({ type: TO_LOGIN });
export const userLogin = ({ userName, userID }) => ({
  type: USER_LOGIN,
  payload: {
    userName,
    userID,
  },
});
