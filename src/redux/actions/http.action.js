import { LOAD_CONTACT_BY_USER } from "redux/types";
import { showAlert } from "redux/actions";
import { httpLoadContactsByUser } from "utils/http";

export const loadContactsByUser = (id) => {
  return async (dispatch) => {
    const data = await httpLoadContactsByUser(id);
    if (data.isError) {
      dispatch(showAlert(data.message));
    }
    dispatch({
      type: LOAD_CONTACT_BY_USER,
      payload: data,
    });
  };
};
