export const sortContactsByName = (contacts) => {
  return contacts.sort((a, b) => (a.name > b.name ? 1 : -1));
};
