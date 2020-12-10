export const getFiltered = (contacts, filterString) => {
  const words =
    filterString.match(/([a-zA-Z]+)/g)?.map((item) => item.toLowerCase()) || [];
  const digits = filterString.match(/[0-9]+/g) || [];

  return contacts.filter(
    ({ phone, name }) =>
      digits.reduce((state, filter) => state && phone.includes(filter), true) &&
      words.reduce(
        (state, filter) =>
          state && name.toLowerCase().replace(/[\W]/, "").includes(filter),
        true
      )
  );
};
