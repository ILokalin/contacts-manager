import axios from "axios";
import { isSuccess } from "utils";

const URL = "http://localhost:4000/";

export const http = async (urn, method = "get", data = null) => {
  try {
    const response = await axios[method](URL + urn, data);
    isSuccess(response);
    return response;
  } catch (e) {
    e.isError = true;
    return e;
  }
};
