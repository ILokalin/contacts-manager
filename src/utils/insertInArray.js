export const insertInArray = (contacts, payload) => {
  const index = contacts.findIndex(({ id }) => id === payload.id);

  if (index === -1) {
    return contacts.concat(payload);
  } else {
    return contacts
      .slice(0, index)
      .concat(payload)
      .concat(contacts.slice(index + 1));
  }
};
