import {
  LOAD_CONTACTS_BY_USER,
  LOAD_CONTACT_BY_ID,
  SET_FILTER,
  GET_FILTERED,
  REMOVE_CONTACT,
} from "redux/types";
import { POST, GET, PUT, DELETE } from "utils/http";
import { showAlert } from "redux/actions";
import { http } from "utils/http";

const isActionSuccess = (isError, dispatch, message) => {
  if (isError) {
    dispatch(showAlert(message));
    return false;
  }
  return true;
};

export const loadContactsByUser = (id) => {
  return async (dispatch) => {
    const stringURN = `users/${encodeURIComponent(id)}/contacts`;
    const { isError, message, data } = await http(stringURN, GET);

    if (isError) {
      dispatch(showAlert(message));
    } else {
      dispatch({
        type: LOAD_CONTACTS_BY_USER,
        payload: data,
      });
      dispatch(getFiltered());
    }
  };
};

export const loadContactById = (id) => {
  return async (dispatch) => {
    const { isError, message, data } = await http(`contacts/${id}`, GET);

    if (isError) {
      dispatch(showAlert(message));
    } else {
      dispatch({
        type: LOAD_CONTACT_BY_ID,
        payload: data,
      });
      dispatch(getFiltered());
    }
  };
};

export const postNewContact = (userId, contact) => {
  return async (dispatch) => {
    const { isError, message, data } = await http("contacts", POST, {
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

export const putContact = (contact) => {
  const stringURN = `contacts/${contact.id}`;
  return async (dispatch) => {
    const { isError, message, data } = await http(stringURN, PUT, contact);

    if (isError) {
      dispatch(showAlert(message));
    } else {
      dispatch(loadContactById(data.id));
    }
  };
};

export const deleteContact = (id) => {
  const stringURN = `contacts/${id}`;
  return async (dispatch) => {
    const { isError, message, data } = await http(stringURN, DELETE);

    if (isActionSuccess(isError, dispatch, message)) {
      dispatch({
        type: REMOVE_CONTACT,
        payload: id,
      });
      dispatch(getFiltered());
    }
  };
};

export const setFilter = (filterString) => {
  return (dispatch) => {
    dispatch({
      type: SET_FILTER,
      payload: filterString,
    });
    dispatch(getFiltered());
  };
};

export const getFiltered = () => ({
  type: GET_FILTERED,
});
