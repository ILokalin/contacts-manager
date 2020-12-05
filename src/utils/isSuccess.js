import { throwError } from "utils/throwError";

export const isSuccess = ({ statusText, status }) => {
  if (status >= 300 || status < 200) {
    throwError(statusText, status);
  }
};
