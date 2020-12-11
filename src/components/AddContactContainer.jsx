import { useState } from "react";
import { setVisibility } from "utils";
import { AddContactForm } from "components";

const ButtonSelector = new Map([
  [false, { name: "New Contact", class: "btn-success" }],
  [true, { name: "Close", class: "btn-outline-secondary" }],
]);

export const AddContactContainer = () => {
  const [isAddFormShow, setAddFormShow] = useState(false);

  const onNewContactButtonClick = () => {
    setAddFormShow((prev) => !prev);
  };

  return (
    <div>
      <div className="d-block d-md-none">
        {setVisibility(isAddFormShow, <AddContactForm />)}
        <button
          className={`btn ${ButtonSelector.get(isAddFormShow).class}`}
          onClick={onNewContactButtonClick}
        >
          {ButtonSelector.get(isAddFormShow).name}
        </button>
      </div>
      <div className="d-none d-md-block">
        <AddContactForm />
      </div>
    </div>
  );
};
