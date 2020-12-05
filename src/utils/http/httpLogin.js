import axios from "axios";
import { throwError } from "utils/throwError";

export const httpLogin = async (id) => {
  const stringURI = `http://localhost:4000/users/${id}`;
  try {
    const response = await axios.get(stringURI);
    console.log("keep Out");
    const { statusText, status } = response;
    if (status >= 300 || status < 200) {
      throwError(statusText, status);
    }
    return response.data;
  } catch (e) {
    e.isError = true;
    return e;
  }
};
