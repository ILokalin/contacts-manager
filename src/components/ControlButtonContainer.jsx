import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, toggleEdit } from "redux/actions";
import { CheckIcon, RemoveIcon, DotsIcon } from "icons";
import { setVisibility } from "utils";
import { useDebounce } from "hooks";

const HOLD = "HOLD";
const LOCK = "LOCK";

export const ControlButtonContainer = (props) => {
  const dispatch = useDispatch();
  const debounce = useDebounce();
  const debounceHold = useDebounce(HOLD);
  const debounceLock = useDebounce(LOCK);

  const { isEdit, id } = useSelector(({ contact }) => contact);
  const isCurrent = id === props.id;

  useEffect(() => {
    if (!isEdit && isCurrent) {
      debounceLock.unlock();
    }
    // eslint-disable-next-line
  }, [isEdit]);

  const onMenuButtonClick = () => {
    if (debounce.status) {
      dispatch(toggleEdit(props.id));
    }
  };

  const onRemoveButtonClick = () => {
    if (debounceHold.status) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <div className="d-flex justify-content-between">
      {setVisibility(
        isEdit,
        <div className="d-flex justify-content-between">
          <button className="btn btn-sm text-success shadow-none">
            <CheckIcon />
          </button>
          <button
            onClick={onRemoveButtonClick}
            className="btn btn-sm text-danger shadow-none"
          >
            <RemoveIcon />
          </button>
        </div>
      )}
      <button onClick={onMenuButtonClick} className="btn btn-sm shadow-none">
        <DotsIcon isRotate={isEdit} />
      </button>
    </div>
  );
};
