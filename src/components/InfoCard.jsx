import { formatPhoneString } from "utils/formatPhoneString";

export const InfoCard = ({ name, phone }) => {
  return (
    <>
      <strong>{name}</strong>
      <p className="mb-0">{formatPhoneString(phone)}</p>
    </>
  );
};
