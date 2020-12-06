export const throwError = (message, code) => {
  const e = new Error(message);
  e.code = code;
  e.isError = true;
  throw e;
};
