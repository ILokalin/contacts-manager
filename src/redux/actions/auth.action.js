import {
  TO_REGISTRATION,
  TO_LOGIN,
  USER_LOGIN,
  USER_LOGOUT,
  GET_AUTHENTICATE,
} from "redux/types";
import { httpFindUser, httpLogin } from "utils/http";
import { showAlert } from "redux/actions";

export const turnToRegistration = () => ({ type: TO_REGISTRATION });
export const turnToLogin = () => ({ type: TO_LOGIN });
export const getAuthenticate = ({ login, password }) => {
  return async (dispatch) => {
    const data = await httpFindUser(login, password);

    if (data.isError) {
      dispatch(showAlert(data.message));
    } else {
      dispatch({
        type: GET_AUTHENTICATE,
        payload: { ...data },
      });
    }
  };
};

export const userLogin = (id) => {
  if (id === "") {
    return {
      type: USER_LOGOUT,
    };
  }

  return async (dispatch) => {
    const data = await httpLogin(id);
    if (data.isError) {
      dispatch(showAlert(data.message));
    } else {
      dispatch({
        type: USER_LOGIN,
        payload: { ...data },
      });
    }
  };
};

export const userLogout = () => ({
  type: USER_LOGOUT,
});
