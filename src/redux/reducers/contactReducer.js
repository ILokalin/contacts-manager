import { TOGGLE_EDIT } from "redux/types";

const Handler = {
  [TOGGLE_EDIT]: (state, payload) => ({
    ...state,
    id: payload,
    isEdit: state.id === payload ? !state.isEdit : true,
  }),
  DEFAULT: (state) => state,
};

const initialize = {
  currentId: null,
  isEdit: false,
};

export const contactReducer = (state = initialize, { type, payload }) => {
  const handle = Handler[type] || Handler["DEFAULT"];
  return handle(state, payload);
};
