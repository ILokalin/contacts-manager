export const InfoCard = ({ name, phone }) => {
  return (
    <>
      <strong>{name}</strong>
      <p className="mb-0">{phone}</p>
    </>
  );
};
