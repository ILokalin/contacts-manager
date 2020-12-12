import { useDispatch, useSelector } from "react-redux";
import { InfoCard, EditCard } from "components";
import { setVisibility } from "utils";
import { ChevronUpIcon, DotsVerticalIcon } from "icons";
import { useDebounce } from "hooks";
import { toggleEdit } from "redux/actions";

export const ContactCard = (props) => {
  const dispatch = useDispatch();
  const { isEdit, id, isHold } = useSelector(({ contact }) => contact);
  const debounce = useDebounce();
  const isOpen = isEdit && props.id === id && !isHold;

  const onMenuButtonClick = () => {
    if (debounce.status) {
      dispatch(toggleEdit(props.id));
    }
  };

  return (
    <div className="d-flex justify-content-between">
      <div className="mr-2 flex-grow-1">
        {setVisibility(
          isOpen,
          <EditCard {...props} />,
          <InfoCard {...props} />
        )}
      </div>
      <div>
        <button onClick={onMenuButtonClick} className="btn btn-sm shadow-none">
          {setVisibility(isOpen, <ChevronUpIcon />, <DotsVerticalIcon />)}
        </button>
      </div>
    </div>
  );
};
