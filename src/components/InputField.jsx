import { setVisibility } from "utils";

export const InputField = (props) => {
  const {
    onInputChange,
    name,
    type,
    label,
    refer,
    placeholder,
    className = "",
    value = "",
  } = props;

  return (
    <div className={`form-group ${className}`}>
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
