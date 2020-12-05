import { LOAD_CONTACT_BY_USER } from "redux/types";

const Handler = {
  [LOAD_CONTACT_BY_USER]: (state, payload) => ({
    ...state,
    contacts: payload.isError ? [] : payload,
  }),
  DEFAULT: (state) => state,
};

const initialState = {
  contacts: [],
};

export const httpReducer = (state = initialState, { type, payload }) => {
  const handle = Handler[type] || Handler.DEFAULT;
  return handle(state, payload);
};
