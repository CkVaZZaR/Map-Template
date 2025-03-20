import { useState } from "react";
import "./SettingBar.css";

export default function SettingBar({
  label,
  icon,
  initialChecked = false,
  onChange,
  disabled = false,
}) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = () => {
    if (!disabled) {
      const newState = !isChecked;
      setIsChecked(newState);
      onChange?.(newState);
    }
  };

  return (
    <div
      className={`toggle-menu-item ${disabled ? "disabled" : ""}`}
      onClick={handleToggle}
      role='switch'
      aria-checked={isChecked}
      aria-disabled={disabled}
    >
      <div className='content-wrapper'>
        {icon && <span className='icon'>{icon}</span>}
        <span className='label'>{label}</span>
      </div>

      <div className={`toggle-track ${isChecked ? "checked" : ""}`}>
        <div className='toggle-thumb' />
      </div>
    </div>
  );
}
