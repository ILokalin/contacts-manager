export const InputField = (props) => {
  const { onInputChange, name, type, label, placeholder } = props;

  return (
    <div className="form-group">
      <label htmlFor={`${name}-ID`}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={`${name}-ID`}
        name={name}
        onChange={onInputChange}
      />
      {placeholder ? (
        <small className="form-text text-muted">{placeholder}</small>
      ) : null}
    </div>
  );
};
