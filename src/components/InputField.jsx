import { setVisibility } from "utils";

export const InputField = (props) => {
  const {
    className = "",
    label,
    name,
    onInputChange,
    placeholder,
    refer,
    type,
    value = "",
  } = props;

  return (
    <div className={`form-group ${className}`}>
      {setVisibility(label, <label htmlFor={`${name}-ID`}>{label}</label>)}
      <input
        autoComplete="new-password"
        className="form-control"
        id={`${name}-ID`}
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
