import { setVisibility } from "utils/setVisibility";

export const InputField = (props) => {
  const {
    onInputChange,
    name,
    type,
    label,
    refer,
    placeholder,
    value = "",
  } = props;

  return (
    <div className="form-group">
      {setVisibility(label, <label htmlFor={`${name}-ID`}>{label}</label>)}
      <input
        className="form-control"
        id={`${name}-ID`}
        // autoComplete="off"
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