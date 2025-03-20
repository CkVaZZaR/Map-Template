import React from "react";
import styled from "styled-components";
import ThemeToggle from "../themeToggle/themeToggle";
import SettingBar from "../SettingBar/SettingBar";
import { FiMoon } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import useTheme from "../../hooks/useTheme";
import "./Settings.css";

const Container = styled.div`
  padding: 1rem;
  text-align: center;
`;

export default function Settings() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <div className='settings-punct'>
        <h3>Внешний вид</h3>
        <SettingBar
          label='Тёмная тема'
          icon={<FiMoon />}
          onChange={toggleTheme}
          initialChecked={theme === "dark"}
        />
      </div>
      <div className='settings-punct'>
        <h3>Остальные настройки</h3>
        <SettingBar
          label='Этот пункт недоступен'
          icon={<AiOutlineQuestionCircle />}
        />
        <SettingBar
          label='Этот пункт тоже недоступен'
          icon={<AiOutlineQuestionCircle />}
        />
        <SettingBar
          label='Этот пункт еще в разработке'
          icon={<AiOutlineQuestionCircle />}
        />
      </div>
    </>
  );
}
