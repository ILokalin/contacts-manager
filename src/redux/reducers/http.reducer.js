import {
  LOAD_CONTACTS_BY_USER,
  LOAD_CONTACT_BY_ID,
  SET_FILTER,
  REMOVE_CONTACT,
} from "redux/types";
import {
  getFiltered,
  insertInArray,
  removeFromArray,
  sortContactsByName,
} from "utils/arrayTools";

const Handler = {
  [SET_FILTER]: (state, payload) => ({
    ...state,
    filterString: payload,
    filteredContacts: getFiltered(state.contacts, state.filterString),
  }),
  [LOAD_CONTACTS_BY_USER]: (state, payload) => {
    const newContacts = sortContactsByName(payload);
    return {
      ...state,
      contacts: newContacts,
      filteredContacts: getFiltered(newContacts, state.filterString),
    };
  },
  [LOAD_CONTACT_BY_ID]: (state, payload) => {
    const newContacts = sortContactsByName(
      insertInArray(state.contacts, payload)
    );
    return {
      ...state,
      contacts: newContacts,
      filteredContacts: getFiltered(newContacts, state.filterString),
    };
  },
  [REMOVE_CONTACT]: (state, payload) => {
    const newContacts = removeFromArray(state.contacts, payload);
    return {
      ...state,
      contacts: newContacts,
      filteredContacts: getFiltered(newContacts, state.filterString),
    };
  },
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
