import "./InputMenuItem.css";

export default function InputMenuItem({
  label,
  icon,
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
}) {
  const handleChange = (e) => {
    if (!disabled && onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`input-menu-item ${disabled ? "disabled" : ""}`}>
      <div className='content-wrapper'>
        {icon && <span className='icon'>{icon}</span>}
        <span className='label'>{label}</span>
      </div>

      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className='input-field'
        disabled={disabled}
        aria-label={label}
      />
    </div>
  );
}
