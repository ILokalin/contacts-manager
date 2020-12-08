import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/actions";
import { useInput } from "hooks";
import { InputField } from "components";
import { SearchIcon } from "icons";
import { setVisibility } from "utils";

const style = {
  form: {
    display: "inline-flex",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  button: {
    outline: "none",
    boxShadow: "none",
  },
};

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
    <div style={style.form}>
      {setVisibility(
        isSearchLine,
        <InputField
          name="search"
          type="search"
          isSearchMod={true}
          refer={search.refer}
          value={search.value}
          onInputChange={onSearchChange}
        />
      )}
      <button
        className="btn text-secondary"
        style={style.button}
        onClick={onSearchButtonClick}
      >
        <SearchIcon isRotate={isSearchLine} />
      </button>
    </div>
  );
};
