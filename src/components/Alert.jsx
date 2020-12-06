import React from "react";
import { useDispatch } from "react-redux";
import { removeAlert } from "redux/actions";

const style = {
  alert: {
    position: "absolute",
    top: 0,
    zIndex: 9000,
    left: "50%",
    transform: "translateX(-50%)",
  },
};

export const Alert = ({ message }) => {
  const dispatch = useDispatch();

  const onCloseButtonClick = () => {
    dispatch(removeAlert());
  };

  return (
    <div
      style={style.alert}
      className="alert container alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Warning!</strong>
      &nbsp;{message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onCloseButtonClick}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
