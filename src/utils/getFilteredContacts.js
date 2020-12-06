export const getFilteredContacts = ({
  contacts,
  filteredContacts,
  filterString,
}) => {
  const altFilterString = filterString.replace(/[\W]/, "").toLowerCase();

  return contacts.filter(({ phone, name }) =>
    [altFilterString, filterString.toLowerCase()].reduce(
      (state, filter) =>
        state || phone.includes(filter) || name.toLowerCase().includes(filter),
      false
    )
  );
};
