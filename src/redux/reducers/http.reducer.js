import { LOAD_CONTACTS_BY_USER, LOAD_CONTACT_BY_ID } from "redux/types";

const compareId = (id) => {
  return (item) => item === id;
};

const insertContact = (contacts, payload) => {
  const indexCompare = compareId(payload.id);
  const index = contacts.findIndex(indexCompare);
  if (index === -1) {
    return contacts.concat(payload);
  } else {
    return contacts
      .slice(0, index)
      .concat(payload)
      .concat(contacts.slice(index + 1));
  }
};

const Handler = {
  [LOAD_CONTACTS_BY_USER]: (state, payload) => ({
    ...state,
    contacts: payload.isError ? [] : payload,
  }),
  [LOAD_CONTACT_BY_ID]: (state, payload) => ({
    ...state,
    contacts: insertContact(state.contacts, payload),
  }),
  DEFAULT: (state) => state,
};

const initialState = {
  contacts: [],
};

export const httpReducer = (state = initialState, { type, payload }) => {
  const handle = Handler[type] || Handler.DEFAULT;
  return handle(state, payload);
};
