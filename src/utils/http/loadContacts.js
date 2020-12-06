import { http } from "./http";

export const httpLoadContactsByUser = async (id) => {
  const stringURN = `users/${encodeURIComponent(id)}/contacts`;
  try {
    const response = await http(stringURN);

    return response.data;
  } catch (e) {
    e.isError = true;
    return e;
  }
};
