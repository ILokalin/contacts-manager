import {
  GET_AUTHENTICATE,
  TO_LOGIN,
  TO_REGISTRATION,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
} from "redux/types";

const handler = {
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
  const handle = handler[type] || handler.DEFAULT;
  return handle(state, payload);
};
