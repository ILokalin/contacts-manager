import { useDispatch } from "react-redux";
import { putContact, toggleEdit } from "redux/actions";
import { useInput } from "hooks";
import { InputField } from "components";
import { formatPhoneString } from "utils/formatPhoneString";
import { getDigitsOnly } from "utils/phoneTools";
import { ControlButtonContainer } from "components";

export const EditCard = ({ name, phone, id, userId, isCheck }) => {
  const dispatch = useDispatch();
  const nameField = useInput(name);
  const phoneField = useInput(formatPhoneString(phone));

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(toggleEdit());
    dispatch(
      putContact({
        name: nameField.value.trim(),
        phone: getDigitsOnly(phoneField.value),
        id,
        userId,
      })
    );
  };

  return (
    <>
      <form
        id={`form-${id}`}
        className="d-flex flex-column flex-lg-row flex-grow-1"
        onSubmit={onFormSubmit}
      >
        <InputField
          className="mr-2 w-100"
          label="Name"
          name="name"
          type="text"
          {...nameField}
        />
        <InputField
          className="w-100"
          label="Phone"
          name="phone"
          type="text"
          {...phoneField}
        />
      </form>
      <ControlButtonContainer id={id} />
    </>
  );
};
