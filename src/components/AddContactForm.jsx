import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInput } from "hooks";
import { InputField } from "components/InputField";
import { postNewContact } from "redux/actions";
import { formatPhoneDigitsOnly } from "utils";
import { FORMAT_MASK } from "utils/formatPhoneString";

const PHONE_PLACEHOLDER = "Use format: +7(800) 000-00-00";

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const userId = useSelector(({ auth }) => auth.id);
  const name = useInput("");
  const phone = useInput(FORMAT_MASK);
  const isValidity = name.isValidity && phone.isValidity;

  useEffect(() => {
    name.setFocus();
    // eslint-disable-next-line
  }, []);

  const clearForm = () => {
    phone.clear();
    name.clear();
    name.setFocus();
    dispatch(
      postNewContact(userId, {
        name: name.value,
        phone: formatPhoneDigitsOnly(phone.value),
      })
    );
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    clearForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <InputField name="name" type="text" label="Name" {...name} />
      <InputField
        name="phone"
        type="text"
        label="Phone"
        placeholder={PHONE_PLACEHOLDER}
        {...phone}
      />
      <button
        type="submit"
        className="btn btn-primary float-right"
        disabled={!isValidity}
      >
        Add
      </button>
    </form>
  );
};
