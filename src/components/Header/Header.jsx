import React from "react";
import "./Header.css";

export default function Header({ active }) {
  return (
    <header className='header'>
      <h1 className='header-title'>
        {active === "home"
          ? "Анкеты"
          : active === "settings"
          ? "Настройки"
          : "Профиль"}
      </h1>
    </header>
  );
}
