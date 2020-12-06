import { useEffect, useState } from "react";
import { InfoCard, EditCard } from "components";
import { setVisibility } from "utils/setVisibility";
import { Pencil, Remove, Check } from "icons";

const style = {
  button: {
    padding: 0,
    outline: "none",
    boxShadow: "none",
  },
};

export const ContactCard = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    if (isCheck) {
      setIsEdit(false);
      setIsCheck(false);
    }
  }, [isCheck]);

  const onEditButtonClick = () => {
    setIsEdit((prev) => !prev);
  };

  const onRemoveButtonClick = () => {};

  const onCheckButtonClick = () => {
    setIsCheck(true);
  };

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
        <button
          style={style.button}
          className="btn btn-sm text-muted mr-2"
          onClick={onEditButtonClick}
        >
          <Pencil />
        </button>
        {setVisibility(
          isEdit,
          <button
            style={style.button}
            className="btn btn-sm text-danger"
            onClick={onCheckButtonClick}
          >
            <Check />
          </button>,

          <button
            style={style.button}
            className="btn btn-sm text-danger"
            onClick={onRemoveButtonClick}
          >
            <Remove />
          </button>
        )}
      </div>
    </div>
  );
};
