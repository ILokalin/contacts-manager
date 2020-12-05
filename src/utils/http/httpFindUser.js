import axios from "axios";
import { throwError } from "utils/throwError";

export const httpFindUser = async (login, password) => {
  try {
    const stringURI = `http://localhost:4000/users?login=${encodeURIComponent(
      login
    )}&?password=${encodeURIComponent(password)}`;
    const response = await axios.get(stringURI);
    const { statusText, status } = response;
    if (status >= 300 || status < 200) {
      throwError(statusText, status);
    }
    const { data } = response;
    const { length } = data;
    if (length === 0) {
      throwError("User not found or password error", "404");
    } else if (length > 1) {
      throwError("The dataBase is corrupted. Call the adminstration", "417");
    }
    return data[0];
  } catch (e) {
    e.isError = true;
    return e;
  }
};
