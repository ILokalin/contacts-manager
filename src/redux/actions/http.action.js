import {
  LOAD_CONTACTS_BY_USER,
  LOAD_CONTACT_BY_ID,
  SET_FILTER,
  REMOVE_CONTACT,
} from "redux/types";
import { POST, GET, PUT, DELETE, http } from "utils/http";
import { isActionSuccess } from "utils";

export const loadContactsByUser = (id) => {
  return async (dispatch) => {
    const stringURN = `users/${encodeURIComponent(id)}/contacts`;
    const response = await http(stringURN, GET);

    if (isActionSuccess(response, dispatch)) {
      dispatch({
        type: LOAD_CONTACTS_BY_USER,
        payload: response.data,
      });
    }
  };
};

export const loadContactById = (id) => {
  return async (dispatch) => {
    const response = await http(`contacts/${id}`, GET);

    if (isActionSuccess(response, dispatch)) {
      dispatch({
        type: LOAD_CONTACT_BY_ID,
        payload: response.data,
      });
    }
  };
};

export const postNewContact = (userId, contact) => {
  return async (dispatch) => {
    const response = await http("contacts", POST, {
      ...contact,
      userId,
    });

    if (isActionSuccess(response, dispatch)) {
      dispatch(loadContactById(response.data.id));
    }
  };
};

export const putContact = (contact) => {
  const stringURN = `contacts/${contact.id}`;
  return async (dispatch) => {
    const response = await http(stringURN, PUT, contact);

    if (isActionSuccess(response, dispatch)) {
      dispatch(loadContactById(response.data.id));
    }
  };
};

export const deleteContact = (id) => {
  const stringURN = `contacts/${id}`;
  return async (dispatch) => {
    const response = await http(stringURN, DELETE);

    if (isActionSuccess(response, dispatch)) {
      dispatch({
        type: REMOVE_CONTACT,
        payload: id,
      });
    }
  };
};

export const setFilter = (filterString) => ({
  type: SET_FILTER,
  payload: filterString,
});
