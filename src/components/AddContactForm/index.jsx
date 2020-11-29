import { useState } from "react";
import { InputField } from "components/InputField";
import { validity } from "utils/validity";

const phonePlaceholder = "Use format: +7(800)-000-00-00";

const formInitial = {
  name: {
    value: "",
    isValidity: false,
  },
  phone: {
    value: "+ (   )    -  -  ",
    isValidity: false,
  },
};

export const AddContactForm = () => {
  const [{ name, phone }, setForm] = useState(formInitial);

  const onInputChange = ({ target, nativeEvent }) => {
    setForm({
      ...{ name, phone },
      [target.name]: validity({ target, nativeEvent }),
    });
  };

  const isValidity = name.isValidity && phone.isValidity;

  return (
    <form>
      <h3>Add new contact</h3>
      <InputField
        name="name"
        type="text"
        label="Name"
        value={name.value}
        onInputChange={onInputChange}
      />
      <InputField
        name="phone"
        type="text"
        label="Phone"
        placeholder={phonePlaceholder}
        value={phone.value}
        onInputChange={onInputChange}
      />
      <button
        type="button"
        className="btn btn-primary float-right"
        disabled={!isValidity}
      >
        Add
      </button>
    </form>
  );
};
