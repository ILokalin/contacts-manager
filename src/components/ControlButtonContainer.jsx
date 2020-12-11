import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/actions";
import { CheckIcon, RemoveIcon, DotsIcon } from "icons";
import { setVisibility } from "utils";
import { useDebounce } from "hooks";

const HOLD = "HOLD";
const LOCK = "LOCK";

export const ControlButtonContainer = ({ id }) => {
  const dispatch = useDispatch();
  const debounce = useDebounce();
  const debounceHold = useDebounce(HOLD);
  const debounceLock = useDebounce(LOCK);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      debounceLock.unlock();
    }
    // eslint-disable-next-line
  }, [isOpen]);

  const onMenuButtonClick = () => {
    if (debounce.status) {
      setIsOpen((prev) => !prev);
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
        isOpen,
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
        <DotsIcon isRotate={isOpen} />
      </button>
    </div>
  );
};
