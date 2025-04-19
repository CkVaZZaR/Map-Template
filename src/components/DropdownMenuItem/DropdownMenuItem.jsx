import { useState } from "react";
import "./DropdownMenuItem.css";

export default function DropdownMenuItem({
  label,
  icon,
  value,
  options = [],
  onChange,
  disabled = false,
  click = false,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  async function handleSelect(selectedValue) {
    onChange(selectedValue);
    setIsOpen(false);
  }

  return (
    <div
      className={
        `dropdown-menu-item ${disabled ? "disabled" : ""}` +
        (click ? " clicked" : "")
      }
    >
      <div
        className={"dropdown-header" + (click ? " clicked" : "")}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className={"content-wrapper" + (click ? " clicked" : "")}>
          {icon && <span className='icon'>{icon}</span>}
          <span className='label'>{label}</span>
        </div>

        <div className={"selected-option" + (click ? " clicked" : "")}>
          <span>{selectedLabel}</span>
          <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
        </div>
      </div>

      {isOpen && (
        <div className={"dropdown-options" + (click ? " clicked" : "")}>
          {options.map((option) => (
            <div
              key={option.value}
              className={
                `option-item ${value === option.value ? "selected" : ""}` +
                (click ? " clicked" : "")
              }
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
