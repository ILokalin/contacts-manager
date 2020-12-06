import { http } from "./http";

export const httpLogin = async (id) => {
  const stringURN = `users/${id}`;
  try {
    const response = await http(stringURN);
    return response.data;
  } catch (e) {
    e.isError = true;
    return e;
  }
};
