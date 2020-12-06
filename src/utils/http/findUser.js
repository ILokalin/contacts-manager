import { http } from "./http";
import { throwError } from "utils/throwError";

export const httpFindUser = async (login, password) => {
  const stringURN = `users?login=${encodeURIComponent(
    login
  )}&?password=${encodeURIComponent(password)}`;
  try {
    const response = await http(stringURN);
    const { data } = response;
    const { length } = data;

    if (length === 0) {
      throwError("User not found or password error", "404");
    } else if (length > 1) {
      throwError("The dataBase is corrupted. Call the adminstration", "417");
    }

    return data[0];
  } catch (e) {
    return e;
  }
};
