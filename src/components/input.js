const Input = ({
  name,
  value,
  error,
  salary,
  handleChange,
  altType,
  label,
}) => {
  if (salary) {
    return (
      <>
        <label htmlFor={name}>
          {label} £{value}
        </label>
        <div className="slide-container" style={{marginBottom: '30px'}}>
          <input
            type="range"
            min="1"
            max="5000000"
            value={value}
            name={name}
            className="slider"
            id={name}
            onChange={handleChange}
          />
        </div>
      </>
    );
  }
  return (
    <div className="form-input">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <label htmlFor={name}>{label}</label>
        {error && <span className="form-error"> {error}</span>}
      </div>
      <input
        type={altType ?? name}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
