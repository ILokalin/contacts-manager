import { getFormatedNumber } from "utils/phoneTools/getFormatedNumber";

export const InfoCard = ({ name, phone = "" }) => {
  return (
    <>
      <strong>{name}</strong>
      <p className="mb-0">{getFormatedNumber(phone)}</p>
    </>
  );
};
