import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "redux/actions";
import { SearchForm } from "components";
import { Account } from "icons";

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
      <div className="container">
        <div className="d-flex align-items-center">
          <Account />
          <span className="navbar-brand">{userName}</span>
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
    </nav>
  );
};
