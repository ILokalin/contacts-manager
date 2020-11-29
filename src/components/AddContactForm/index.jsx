import { useEffect } from "react";
import { InputField } from "components/InputField";
import { useInput } from "hooks";

const phonePlaceholder = "Use format: +7(800)-000-00-00";

export const AddContactForm = () => {
  const name = useInput("");
  const phone = useInput("+ (   )    -  -  ");
  const isValidity = name.isValidity && phone.isValidity;

  useEffect(() => {
    name.setFocus();
    // eslint-disable-next-line
  }, []);

  const clearForm = () => {
    name.clear();
    phone.clear();
  };

  return (
    <form>
      <h3>Add new contact</h3>
      <InputField name="name" type="text" label="Name" {...name} />
      <InputField
        name="phone"
        type="text"
        label="Phone"
        placeholder={phonePlaceholder}
        {...phone}
      />
      <button
        type="button"
        className="btn btn-primary float-right"
        onClick={clearForm}
        disabled={!isValidity}
      >
        Add
      </button>
    </form>
  );
};
