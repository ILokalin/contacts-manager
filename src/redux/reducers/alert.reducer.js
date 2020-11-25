import { SHOW_ALERT, REMOVE_ALERT } from "redux/types";

const Handler = {
  [SHOW_ALERT]: (state, payload) => ({
    ...state,
    isShow: true,
    message: payload,
  }),
  [REMOVE_ALERT]: (state) => ({ ...state, isShow: false }),
  DEFAULT: (state) => state,
};

const initialState = {
  isShow: false,
  message: "",
};

export const alertReducer = (state = initialState, { type, payload }) => {
  const handle = Handler[type] || Handler.DEFAULT;
  return handle(state, payload);
};
