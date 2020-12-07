import axios from "axios";
import { isSuccess } from "utils";

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
