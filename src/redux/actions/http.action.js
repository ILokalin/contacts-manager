import {
  LOAD_CONTACTS_BY_USER,
  LOAD_CONTACT_BY_ID,
  SET_FILTER,
  GET_FILTERED,
  REMOVE_CONTACT,
} from "redux/types";
import { POST, GET, PUT, DELETE, http } from "utils/http";
import { isActionSuccess } from "utils/isActionSuccess";

export const loadContactsByUser = (id) => {
  return async (dispatch) => {
    const stringURN = `users/${encodeURIComponent(id)}/contacts`;
    const response = await http(stringURN, GET);

    if (isActionSuccess(response, dispatch)) {
      dispatch({
        type: LOAD_CONTACTS_BY_USER,
        payload: response.data,
      });
      dispatch(getFiltered());
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
      dispatch(getFiltered());
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
