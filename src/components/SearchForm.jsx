import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useInput } from "hooks";
import { InputField } from "components";
import { setFilter } from "redux/actions";
import { setVisibility } from "utils/setVisibility";

const style = {
  form: {
    flexGrow: 1,
  },
};

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

  return (
    <div style={style.form}>
      <InputField
        name="search"
        type="search"
        isMarginBottomZerro={true}
        refer={search.refer}
        value={search.value}
        onInputChange={onSearchChange}
      />
    </div>
  );
};
