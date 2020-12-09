import axios from "axios";
import { throwError } from "utils";

const isSuccess = ({ statusText, status }) => {
  if (status >= 300 || status < 200) {
    throwError(statusText, status);
  }
};

export const http = async (urn, method = "get", data = null) => {
  try {
    const response = await axios[method]("api/" + urn, data);
    isSuccess(response);
    return response;
  } catch (e) {
    e.isError = true;
    return e;
  }
};
