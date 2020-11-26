import { TO_REGISTRATION, TO_LOGIN } from "redux/types";

const Handler = {
  [TO_REGISTRATION]: (state) => ({ ...state, isRegistration: true }),
  [TO_LOGIN]: (state) => ({ ...state, isRegistration: false }),
  DEFAULT: (state) => state,
};

const initialState = {
  isRegistration: false,
  isAuthenticated: false,
  userID: "",
  userName: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  const handle = Handler[type] || Handler.DEFAULT;
  return handle(state, payload);
};
