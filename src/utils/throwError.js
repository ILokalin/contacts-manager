export const throwError = (message, code) => {
  const e = new Error(message);
  e.code = code;
  throw e;
};
