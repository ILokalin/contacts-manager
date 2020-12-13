import { TOGGLE_EDIT, UNLOCK_EDIT } from "redux/types";

export const toggleEdit = (id) => ({
  type: TOGGLE_EDIT,
  payload: id,
});

export const unlockEdit = (id) => ({
  type: UNLOCK_EDIT,
  payload: id,
});
