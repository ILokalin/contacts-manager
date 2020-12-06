import { showAlert } from "redux/actions";

export const isActionSuccess = ({ isError, message }, dispatch) => {
  if (isError) {
    dispatch(showAlert(message));
    return false;
  }
  return true;
};
