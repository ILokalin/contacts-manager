import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "redux/actions";
import { AccountIcon } from "icons";
import { setVisibility } from "utils";

export const AccountMenu = ({ userName }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const onAccountButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const onLogoutButtonClick = () => {
    dispatch(userLogout());
  };

  return (
    <div className="d-flex flex-column align-items-start pr-2">
      <button className="btn" onClick={onAccountButtonClick}>
        <AccountIcon />
      </button>
      {setVisibility(
        isOpen,
        <>
          <span className="py-2">{userName}</span>
          <button
            className="btn btn-link p-0 my-sm-0"
            onClick={onLogoutButtonClick}
          >
            logout
          </button>
        </>
      )}
    </div>
  );
};
