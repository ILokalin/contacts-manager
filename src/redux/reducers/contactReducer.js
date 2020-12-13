import { TOGGLE_EDIT, UNLOCK_EDIT } from "redux/types";

const handler = {
  [TOGGLE_EDIT]: (state, payload) => {
    const id = payload ? payload : state.id;
    const isHold = !payload || (payload === state.id && state.isHold);
    const isEdit = state.id === payload ? !state.isEdit : true;
    return {
      ...state,
      id,
      isEdit: isHold ? false : isEdit,
      isHold,
    };
  },
  [UNLOCK_EDIT]: (state, payload) => ({
    ...state,
    isHold: state.id === payload ? false : state.isHold,
  }),
  DEFAULT: (state) => state,
};

const initialize = {
  id: null,
  isEdit: false,
  isHold: false,
};

export const contactReducer = (state = initialize, { type, payload }) => {
  const handle = handler[type] || handler["DEFAULT"];
  return handle(state, payload);
};
