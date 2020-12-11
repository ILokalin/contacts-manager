import { TOGGLE_EDIT } from "redux/types";

export const toggleEdit = (id) => ({
  type: TOGGLE_EDIT,
  payload: id,
});
