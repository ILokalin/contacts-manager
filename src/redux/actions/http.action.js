import { LOAD_CONTACTS_BY_USER, LOAD_CONTACT_BY_ID } from "redux/types";
import { showAlert } from "redux/actions";
import { http } from "utils/http";

export const loadContactsByUser = (id) => {
  return async (dispatch) => {
    const stringURN = `users/${encodeURIComponent(id)}/contacts`;
    const { isError, message, data } = await http(stringURN);

    if (isError) {
      dispatch(showAlert(message));
    } else {
      dispatch({
        type: LOAD_CONTACTS_BY_USER,
        payload: data,
      });
    }
  };
};

export const loadContactById = (id) => {
  return async (dispatch) => {
    const { isError, message, data } = await http(`contacts/${id}`);

    if (isError) {
      dispatch(showAlert(message));
    } else {
      dispatch({
        type: LOAD_CONTACT_BY_ID,
        payload: data,
      });
    }
  };
};

export const postNewContact = (userId, contact) => {
  return async (dispatch) => {
    const { isError, message, data } = await http("contacts", {
      ...contact,
      userId,
    });

    if (isError) {
      dispatch(showAlert(message));
    } else {
      dispatch(loadContactById(data.id));
    }
  };
};
