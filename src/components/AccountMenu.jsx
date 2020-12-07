import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "redux/actions";
import { Account } from "icons";
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
      <botton className="btn" onClick={onAccountButtonClick}>
        <Account />
      </botton>
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
