import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "redux/actions";
import { SearchForm, AccountMenu } from "components";
import { AccountIcon } from "icons";

const style = {
  navbar: {
    position: "fixed",
    zIndex: 1000,
    left: 0,
    right: 0,
    boxShadow: "0px 1px 13px 0px rgba(50, 50, 50, 0.4)",
  },
};

export const Navbar = () => {
  const dispatch = useDispatch();
  const userName = useSelector(({ auth }) => auth.name);

  const onLogoutClick = () => {
    dispatch(userLogout());
  };

  return (
    <nav className="navbar navbar-light bg-light" style={style.navbar}>
      <div className="d-none d-sm-flex container">
        <div className="d-flex align-items-center">
          <AccountIcon />
          &nbsp;
          <span className="d-inline-block d-lg-none px-2">{userName}</span>
          <span className="d-none d-lg-inline-block navbar-brand">
            {userName}
          </span>
        </div>
        <SearchForm />
        <button
          className="btn btn-link my-2 my-sm-0"
          type="button"
          onClick={onLogoutClick}
        >
          Logout
        </button>
      </div>

      <div className="d-flex d-sm-none w-100 justify-content-between align-items-start">
        <AccountMenu userName={userName} />
        <SearchForm />
      </div>
    </nav>
  );
};
