export const InputField = (props) => {
  const { onInputChange, name, type, label, placeholder, value = "" } = props;

  return (
    <div className="form-group">
      <label htmlFor={`${name}-ID`}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={`${name}-ID`}
        autoComplete="off"
        name={name}
        onChange={onInputChange}
        value={value}
      />
      {placeholder ? (
        <small className="form-text text-muted">{placeholder}</small>
      ) : null}
    </div>
  );
};
