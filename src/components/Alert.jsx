import React from "react";

const style = {
  alert: {
    position: "absolute",
  },
};

export const Alert = ({ message }) => {
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
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
