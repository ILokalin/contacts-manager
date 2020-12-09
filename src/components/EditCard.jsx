import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { putContact } from "redux/actions";
import { useInput } from "hooks";
import { InputField } from "components";
import { formatPhoneString } from "utils/formatPhoneString";
import { getDigitsOnly } from "utils/phoneTools";

export const EditCard = ({ name, phone, id, userId, isCheck }) => {
  const dispatch = useDispatch();
  const nameField = useInput(name);
  const phoneField = useInput(formatPhoneString(phone));

  useEffect(() => {
    if (isCheck) {
      dispatch(
        putContact({
          name: nameField.value,
          phone: getDigitsOnly(phoneField.value),
          id,
          userId,
        })
      );
    }
    // eslint-disable-next-line
  }, [isCheck]);

  return (
    <>
      <form>
        <InputField label="name" name="name" type="text" {...nameField} />
        <InputField label="phone" name="phone" type="text" {...phoneField} />
      </form>
    </>
  );
};
