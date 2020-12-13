import { SHOW_ALERT, REMOVE_ALERT } from "redux/types";

let lastTimeout = null;

export const showAlert = (message) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: message,
    });

    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }

    lastTimeout = setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  };
};

export const removeAlert = (message) => ({
  type: REMOVE_ALERT,
});
