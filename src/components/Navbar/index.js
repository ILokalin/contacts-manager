import { SearchForm } from "components/SearchForm";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">Contacts Manager</span>
        <SearchForm />
        <button className="btn btn-link my-2 my-sm-0" type="button">
          Logout
        </button>
      </div>
    </nav>
  );
};
