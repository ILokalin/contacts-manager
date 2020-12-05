import axios from "axios";
import { throwError } from "utils/throwError";
import { isSuccess } from "utils/isSuccess";

export const httpLoadContactsByUser = async (id) => {
  const stringURI = `http://localhost:4000/users/${encodeURIComponent(
    id
  )}/contacts`;
  try {
    const response = await axios.get(stringURI);
    isSuccess(response);
    // const { statusText, status } = response;
    // if (status >= 300 || status < 200) {
    //   throwError(statusText, status);
    // }
    return response.data;
  } catch (e) {
    e.isError = true;
    return e;
  }
};
