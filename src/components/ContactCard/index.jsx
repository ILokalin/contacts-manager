import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/actions";
import { InfoCard, EditCard } from "components";
import { setVisibility } from "utils";
import { ControlButtonContainer } from "components/ControlButtonContainer";

export const ContactCard = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

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
          isEdit,
          <EditCard isCheck={isCheck} {...props} />,
          <InfoCard {...props} />
        )}
      </div>
      <div>
        <ControlButtonContainer id={props.id} />
        {/* <button
          style={style.button}
          className="btn btn-sm text-muted mr-2 edit-button"
          onClick={onEditButtonClick}
        >
          <PencilIcon />
        </button> */}
        {/* {setVisibility(
          isEdit,
          <button
            style={style.button}
            className="btn btn-sm text-danger"
            onClick={onCheckButtonClick}
          >
            <CheckIcon />
          </button>,

          <button
            style={style.button}
            className="btn btn-sm text-danger remove-button"
            onClick={onRemoveButtonClick}
          >
            <RemoveIcon />
          </button>
        )} */}
      </div>
    </div>
  );
};
