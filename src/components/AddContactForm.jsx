import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postNewContact } from "redux/actions";
import { useInput } from "hooks";
import { InputField } from "components/InputField";
import { getDigitsOnly } from "utils/phoneTools";

const PHONE_PLACEHOLDER = 'Use international format with "+"';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const userId = useSelector(({ auth }) => auth.id);
  const name = useInput("");
  const phone = useInput("+");
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
        name: name.value.trim(),
        phone: getDigitsOnly(phone.value),
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
        label="Phone"
        name="phone"
        placeholder={PHONE_PLACEHOLDER}
        type="tel"
        {...phone}
      />
      <button
        className="btn btn-primary float-right"
        disabled={!isValidity}
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
