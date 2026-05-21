import './InputField.css';

const InputField = (props) => {
  const { label, placeholder, value, onChange, type = "text", ...restProps } = props;

  return (
    <div className="input-field">
      {label && (
        <label className="input-field__label">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field__control"
        {...restProps}
      />
    </div>
  );
}

export default InputField;
