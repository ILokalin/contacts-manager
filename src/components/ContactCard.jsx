import { useState } from "react";
import { InfoCard, EditCard } from "components";
import { setVisibility } from "utils/setVisibility";

export const ContactCard = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const onEditButtonClick = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <div className="d-flex justify-content-between">
      <div>
        {setVisibility(
          isEdit,
          <EditCard {...props} />,
          <InfoCard {...props} />
        )}
      </div>
      <div>
        <button
          className="btn btn-sm text-muted mr-2"
          onClick={onEditButtonClick}
        >
          &#128393;
        </button>
        <button className="btn btn-sm btn-outline-danger">&times;</button>
      </div>
    </div>
  );
};
