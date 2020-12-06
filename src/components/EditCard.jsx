import { InputField } from "components";

export const EditCard = ({ name, phone }) => {
  return (
    <>
      <form>
        <InputField label="name" value={name} />
        <InputField label="phone" value={phone} />
      </form>
    </>
  );
};
