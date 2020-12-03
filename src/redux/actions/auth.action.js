import { TO_REGISTRATION, TO_LOGIN, USER_LOGIN } from "redux/types";
import { httpFindUser } from "../../utils/http/findUser";
import { showAlert } from "redux/actions";

export const turnToRegistration = () => ({ type: TO_REGISTRATION });
export const turnToLogin = () => ({ type: TO_LOGIN });
export const userLogin = ({ login, password }) => {
  return async (dispatch) => {
    const data = await httpFindUser(login, password);
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
