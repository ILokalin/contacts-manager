import { useState } from "react";
import { InputField } from "components/InputField";

const formInitial = {
  name: "",
  phone: "",
};

export const AddContactForm = () => {
  const [form, setForm] = useState(formInitial);

  const onInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
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
