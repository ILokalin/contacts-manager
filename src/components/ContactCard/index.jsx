import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/actions";
import { useDebounce } from "hooks";
import { InfoCard, EditCard } from "components";
import { setVisibility } from "utils";
import { PencilIcon, RemoveIcon, CheckIcon } from "icons";
import "./index.css";

const style = {
  button: {
    padding: 0,
    outline: "none",
    boxShadow: "none",
  },
};

export const ContactCard = (props) => {
  const dispatch = useDispatch();
  const debounce = useDebounce();
  const debounceHold = useDebounce("HOLD");
  const debounceLock = useDebounce("LOCK");

  const [isEdit, setIsEdit] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    if (isCheck) {
      setIsEdit(false);
      setIsCheck(false);
    }
  }, [isCheck]);

  useEffect(() => {
    if (!isEdit) {
      debounceLock.unlock();
    }
    // eslint-disable-next-line
  }, [isEdit]);

  const onEditButtonClick = () => {
    if (debounce.status()) {
      setIsEdit((prev) => !prev);
    }
  };

  const onRemoveButtonClick = () => {
    if (debounceHold.status()) {
      dispatch(deleteContact(props.id));
    }
  };

  const onCheckButtonClick = () => {
    if (debounceLock.status()) {
      setIsCheck(true);
    }
  };

  return (
    <div className="d-flex justify-content-between">
      <div>
        {setVisibility(
          isEdit,
          <EditCard isCheck={isCheck} {...props} />,
          <InfoCard {...props} />
        )}
      </div>
      <div>
        <button
          style={style.button}
          className="btn btn-sm text-muted mr-2 edit-button"
          onClick={onEditButtonClick}
        >
          <PencilIcon />
        </button>
        {setVisibility(
          isEdit,
          <button
            style={style.button}
            className="btn btn-sm text-danger"
            onClick={onCheckButtonClick}
          >
            <CheckIcon />
          </button>,

          <button
            style={style.button}
            className="btn btn-sm text-danger remove-button"
            onClick={onRemoveButtonClick}
          >
            <RemoveIcon />
          </button>
        )}
      </div>
    </div>
  );
};
