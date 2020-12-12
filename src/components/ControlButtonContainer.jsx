import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, toggleEdit } from "redux/actions";
import { useDebounce } from "hooks";

const HOLD = "HOLD";
const LOCK = "LOCK";

export const ControlButtonContainer = (props) => {
  const dispatch = useDispatch();
  const debounceHold = useDebounce(HOLD);
  const debounceLock = useDebounce(LOCK);

  const { isEdit, id } = useSelector(({ contact }) => contact);
  const isOpen = isEdit && id === props.id;

  useEffect(() => {
    if (isOpen) {
      debounceLock.unlock();
    }
    // eslint-disable-next-line
  }, [isOpen]);

  const onRemoveButtonClick = () => {
    if (debounceHold.status) {
      dispatch(toggleEdit());
      dispatch(deleteContact(id));
    }
  };

  return (
    <div className="d-flex justify-content-between">
      <button
        onClick={onRemoveButtonClick}
        className="btn btn-link btn-sm px-0 text-danger shadow-none"
      >
        Remove
      </button>
      <button
        form={`form-${props.id}`}
        type="submit"
        className="btn btn-success btn-sm shadow-none"
      >
        Confirm
      </button>
    </div>
  );
};
