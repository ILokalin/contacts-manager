import {
  TO_REGISTRATION,
  TO_LOGIN,
  USER_LOGIN,
  USER_LOGOUT,
  GET_AUTHENTICATE,
} from "redux/types";
import { http } from "utils/http";
import { showAlert } from "redux/actions";
import { throwError } from "utils/throwError";
import { isActionSuccess } from "utils/isActionSuccess";

export const turnToRegistration = () => ({ type: TO_REGISTRATION });
export const turnToLogin = () => ({ type: TO_LOGIN });
export const getAuthenticate = ({ login, password }) => {
  return async (dispatch) => {
    const stringURN = `users?login=${encodeURIComponent(
      login
    )}&?password=${encodeURIComponent(password)}`;
    try {
      const response = await http(stringURN);

      if (isActionSuccess(response, dispatch)) {
        const { data } = response;
        const { length } = data;
        if (length === 0) {
          throwError("User not found or password error", "404");
        } else if (length > 1) {
          throwError("The dataBase is corrupted. Call to adminstrator", "417");
        }

        dispatch({
          type: GET_AUTHENTICATE,
          payload: { ...data[0] },
        });
      }
    } catch (e) {
      dispatch(showAlert(e.message));
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
    const stringURN = `users/${id}`;
    const response = await http(stringURN);

    if (isActionSuccess(response, dispatch)) {
      dispatch({
        type: USER_LOGIN,
        payload: { ...response.data },
      });
    }
  };
};

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const userRegister = (userData) => {
  return async (dispatch) => {
    const stringURN = "users";
    const response = await http(stringURN, userData);

    if (isActionSuccess(response, dispatch)) {
      dispatch(userLogin(response.data.id));
    }
  };
};
