import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/actions";
import { useInput } from "hooks";
import { InputField } from "components";
import { SearchIcon } from "icons";
import { setVisibility } from "utils";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const search = useInput("");
  const [isSearchLine, setIsSearchLine] = useState(false);

  const onSearchChange = (evt) => {
    search.onInputChange(evt);
    dispatch(setFilter(evt.target.value));
  };

  const onSearchButtonClick = () => {
    setIsSearchLine((prev) => !prev);
  };

  return (
    <div className="d-inline-flex justify-content-end flex-grow-1">
      {setVisibility(
        isSearchLine,
        <InputField
          className="mb-0 flex-grow-1"
          name="search"
          onInputChange={onSearchChange}
          refer={search.refer}
          type="search"
          value={search.value}
        />
      )}
      <button
        className="btn text-secondary shadow-none"
        onClick={onSearchButtonClick}
      >
        <SearchIcon isRotate={isSearchLine} />
      </button>
    </div>
  );
};
