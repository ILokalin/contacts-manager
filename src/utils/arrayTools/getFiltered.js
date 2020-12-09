export const getFiltered = (contacts, filterString) => {
  if (filterString === "") {
    return contacts;
  }

  const rawWords = filterString.match(/([a-zA-Z]+)/g) || [];
  const rawDigits = filterString.match(/[0-9]+/g) || [];

  const words =
    rawWords.filter(Boolean).map((item) => item.toLowerCase()) || [];
  const digits = rawDigits.filter(Boolean) || [];

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
