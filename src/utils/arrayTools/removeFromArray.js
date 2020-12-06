import { compareId } from "./compareId";

export const removeFromArray = (contacts, id) => {
  const index = contacts.findIndex(compareId(id));

  if (index > -1) {
    return contacts.slice(0, index).concat(contacts.slice(index + 1));
  }
  return contacts;
};
