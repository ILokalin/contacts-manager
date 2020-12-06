import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useInput } from "hooks";
import { InputField } from "components";
import { setFilter } from "redux/actions";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const search = useInput("");

  useEffect(() => {
    search.setFocus();
    // eslint-disable-next-line
  }, []);

  const onSearchChange = (evt) => {
    search.onInputChange(evt);
    dispatch(setFilter(evt.target.value));
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(setFilter(search.value));
  };

  return (
    <form className="form-inline" onSubmit={onFormSubmit}>
      <InputField
        name="search"
        type="search"
        refer={search.refer}
        value={search.value}
        onInputChange={onSearchChange}
      />
      <button
        className="btn btn-outline-primary ml-2 my-2 my-sm-0"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
