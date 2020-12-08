import { formatPhoneNumber } from "utils/phoneTools/formatPhoneNumber";

export const InfoCard = ({ name, phone = "" }) => {
  const formatPhone = formatPhoneNumber(phone);
  return (
    <>
      <strong>{name}</strong>
      <p className="mb-0">{formatPhone.getFormatedValue()}</p>
    </>
  );
};
