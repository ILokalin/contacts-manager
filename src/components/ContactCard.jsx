import { useSelector } from "react-redux";
import { InfoCard, EditCard } from "components";
import { setVisibility } from "utils";
import { ControlButtonContainer } from "components/ControlButtonContainer";

export const ContactCard = (props) => {
  const { isEdit, id } = useSelector(({ contact }) => contact);

  // useEffect(() => {
  //   if (isCheck) {
  //     setIsEdit(false);
  //     setIsCheck(false);
  //   }
  // }, [isCheck]);

  // const onCheckButtonClick = () => {
  //   if (debounceLock.status) {
  //     setIsCheck(true);
  //   }
  // };

  return (
    <div className="d-flex justify-content-between">
      <div>
        {setVisibility(
          isEdit && props.id === id,
          <EditCard {...props} />,
          <InfoCard {...props} />
        )}
      </div>
      <div>
        <ControlButtonContainer id={props.id} />
      </div>
    </div>
  );
};
