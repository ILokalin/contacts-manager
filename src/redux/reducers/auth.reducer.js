import {
  TO_REGISTRATION,
  TO_LOGIN,
  GET_AUTHENTICATE,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
} from "redux/types";

const Handler = {
  [GET_AUTHENTICATE]: (state, { name, id }) => ({
    ...state,
    isAuthenticated: true,
    isRegistrationProc: false,
    name,
    id,
  }),
  [USER_LOGIN]: (state, { name, id }) => ({
    ...state,
    isAuthenticated: true,
    isRegistrationProc: false,
    id,
    name,
  }),
  [USER_LOGOUT]: (state) => ({
    ...state,
    isAuthenticated: false,
    id: "",
    name: "",
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
