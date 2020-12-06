import {
  LOAD_CONTACTS_BY_USER,
  LOAD_CONTACT_BY_ID,
  SET_FILTER,
  GET_FILTERED,
} from "redux/types";
import { insertInArray } from "utils/insertInArray";
import { getFilteredContacts } from "utils/getFilteredContacts";

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
