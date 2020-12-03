import {
  TO_REGISTRATION,
  TO_LOGIN,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
} from "redux/types";

const Handler = {
  [USER_LOGIN]: (state, { name, id }) => ({
    ...state,
    isAuthenticated: true,
    name,
    id,
  }),
  [USER_LOGOUT]: (state) => ({
    ...state,
    isAuthenticated: false,
    userID: "",
    userName: "",
  }),
  [USER_REGISTER]: (state) => ({ ...state, isRegistrationProc: false }),
  [TO_REGISTRATION]: (state) => ({ ...state, isRegistrationProc: true }),
  [TO_LOGIN]: (state) => ({ ...state, isRegistrationProc: false }),
  DEFAULT: (state) => state,
};

const initialState = {
  isRegistrationProc: false,
  isAuthenticated: false,
  id: "",
  name: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  const handle = Handler[type] || Handler.DEFAULT;
  return handle(state, payload);
};
