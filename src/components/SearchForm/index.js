import { useEffect } from "react";
import { SearchField } from "components/SearchField";
import { useInput } from "hooks";

export const SearchForm = () => {
  const search = useInput("");
  const isValidity = search.isValidity;

  useEffect(() => {
    search.setFocus();
    // eslint-disable-next-line
  }, []);

  return (
    <form>
      <SearchField name="search" type="text" label="Search" {...search} />
    </form>
  );
};
