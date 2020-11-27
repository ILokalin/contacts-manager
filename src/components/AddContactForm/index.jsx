import { useState } from "react";
import { InputField } from "components/InputField";
import { validity } from "utils/validity";

const formInitial = {
  name: {
    value: "",
    validity: "",
  },
  phone: "",
};

export const AddContactForm = () => {
  const [form, setForm] = useState(formInitial);
  const [castomValiditi, setCastomValidity] = useState("");

  const onInputChange = ({ target }) => {
    validity(target.name, { field: target });
    setForm({
      ...form,
      [target.name]: {
        value: target.value,
        validity: validity(target.name, { field: target }),
      },
    });
  };

  return (
    <form>
      <h3>Add new contact</h3>
      <InputField
        name="name"
        type="text"
        label="Name"
        onInputChange={onInputChange}
      />
      <InputField
        name="phone"
        type="text"
        label="Phone"
        placeholder="Use format: +7 (800)-000-00-00"
        onInputChange={onInputChange}
      />
      <button type="button" className="btn btn-primary float-right">
        Add
      </button>
    </form>
  );
};
