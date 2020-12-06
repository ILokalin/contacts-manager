import {
  LOAD_CONTACTS_BY_USER,
  LOAD_CONTACT_BY_ID,
  SET_FILTER,
  GET_FILTERED,
  REMOVE_CONTACT,
} from "redux/types";
import { insertInArray, removeFromArray } from "utils/arrayTools";
import { getFilteredContacts } from "utils";

const Handler = {
  [SET_FILTER]: (state, payload) => ({ ...state, filterString: payload }),
  [GET_FILTERED]: (state) => ({
    ...state,
    filteredContacts: getFilteredContacts(state),
  }),
  [LOAD_CONTACTS_BY_USER]: (state, payload) => ({
    ...state,
    contacts: payload.isError ? [] : payload,
  }),
  [LOAD_CONTACT_BY_ID]: (state, payload) => ({
    ...state,
    contacts: insertInArray(state.contacts, payload),
  }),
  [REMOVE_CONTACT]: (state, payload) => ({
    ...state,
    contacts: removeFromArray(state.contacts, payload),
  }),
  DEFAULT: (state) => state,
};

const initialState = {
  contacts: [],
  filteredContacts: [],
  filterString: "",
};

export const httpReducer = (state = initialState, { type, payload }) => {
  const handle = Handler[type] || Handler.DEFAULT;
  return handle(state, payload);
};
