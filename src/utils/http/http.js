import axios from "axios";
import { isSuccess } from "utils/isSuccess";

const URL = "http://localhost:4000/";

export const http = async (urn, data = null) => {
  const isGet = !Boolean(data);
  try {
    const response = await axios[isGet ? "get" : "post"](URL + urn, data);
    isSuccess(response);
    return response;
  } catch (e) {
    e.isError = true;
    throw e;
  }
};