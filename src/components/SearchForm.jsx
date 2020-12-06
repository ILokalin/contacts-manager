import { useEffect } from "react";
import { useInput } from "hooks";
import { InputField } from "components";

export const SearchForm = () => {
  const search = useInput("");
  const isValidity = search.isValidity;

  useEffect(() => {
    search.setFocus();
    // eslint-disable-next-line
  }, []);

  return (
    <form className="form-inline">
      <InputField name="search" type="search" {...search} />
      <button
        className="btn btn-outline-primary ml-2 my-2 my-sm-0"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};
