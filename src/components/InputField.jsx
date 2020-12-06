import { setVisibility } from "utils";

const style = {
  container: {
    flexGrow: 1,
  },
};

export const InputField = (props) => {
  const {
    onInputChange,
    name,
    type,
    label,
    refer,
    placeholder,
    value = "",
    isSearchMod = false,
  } = props;

  return (
    <div
      className={`form-group${isSearchMod ? " mb-0" : ""}`}
      style={isSearchMod ? style.container : null}
    >
      {setVisibility(label, <label htmlFor={`${name}-ID`}>{label}</label>)}
      <input
        className="form-control"
        id={`${name}-ID`}
        autoComplete="new-password"
        onChange={onInputChange}
        ref={refer}
        {...{ type, name, value }}
      />
      {setVisibility(
        placeholder,
        <small className="form-text text-muted">{placeholder}</small>
      )}
    </div>
  );
};
