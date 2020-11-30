export const SearchField = (props) => {
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
      <label htmlFor={`${name}-ID`}>{label}</label>
      <input
        className="form-control"
        id={`${name}-ID`}
        autoComplete="off"
        onChange={onInputChange}
        ref={refer}
        {...{ type, name, value }}
      />
      <button type="submit">Search</button>
      {placeholder ? (
        <small className="form-text text-muted">{placeholder}</small>
      ) : null}
    </div>
  );
};