import { useDispatch, useSelector } from "react-redux";
import { deleteContact, toggleEdit } from "redux/actions";
import { useDebounce } from "hooks";

export const ControlButtonContainer = (props) => {
  const dispatch = useDispatch();
  const debounceHold = useDebounce("HOLD");
  const { id } = useSelector(({ contact }) => contact);

  const onRemoveButtonClick = () => {
    if (debounceHold.status) {
      dispatch(toggleEdit());
      dispatch(deleteContact(id));
    }
  };

  return (
    <div className="d-flex justify-content-between">
      <button
        className="btn btn-link btn-sm px-0 text-danger shadow-none"
        onClick={onRemoveButtonClick}
      >
        Remove
      </button>
      <button
        className="btn btn-success btn-sm shadow-none"
        disabled={!props.isValidity}
        form={`form-${props.id}`}
        type="submit"
      >
        Confirm
      </button>
    </div>
  );
};
