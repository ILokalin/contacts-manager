import { http } from "./http";

export const postUser = async (userData) => {
  const stringURN = "users";
  const response = await http(stringURN, userData);
  return response.data;
};
