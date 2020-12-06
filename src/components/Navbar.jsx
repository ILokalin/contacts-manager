import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "redux/actions";
import { SearchForm } from "components";

export const Navbar = () => {
  const dispatch = useDispatch();
  const userName = useSelector(({ auth }) => auth.name);

  const onLogoutClick = () => {
    dispatch(userLogout());
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">{userName}</span>
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
