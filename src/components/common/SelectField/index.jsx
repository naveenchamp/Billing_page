import './SelectField.css';

const SelectField = (props) => {
  const {
    label,
    placeholder,
    options = [],
    value = '',
    onChange,
    disabled = false,
    ...restProps
  } = props;

  return (
    <div className="select-field">
      {label && (
        <label className="select-field__label">
          {label}
        </label>
      )}
      <select
        className="select-field__control"
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...restProps}
      >
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
