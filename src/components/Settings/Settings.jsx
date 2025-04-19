import React from "react";
import SettingBar from "../SettingBar/SettingBar";
import { FiMoon } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import useTheme from "../../hooks/useTheme";
import { useState } from "react";
import Modal from "../Modal/Modal";
import "./Settings.css";
import { IoMdCloseCircle } from "react-icons/io";
import { TiChartPieOutline } from "react-icons/ti";
import InputMenuItem from "../InputSetting/InputMenuItem";
import { TbRating18Plus } from "react-icons/tb";
import { FaPlusMinus } from "react-icons/fa6";
import useLocalStorage from "../../hooks/useLocalStorage";
import { PiGenderIntersex } from "react-icons/pi";
import { PiGenderIntersexBold } from "react-icons/pi";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";

export default function Settings() {
  const [theme, toggleTheme] = useTheme();
  const [modal, setModal] = useState(false);
  const [click, setClick] = useState(false);
  const [press, setPress] = useState(false);

  const [formData, setFormData] = useLocalStorage({
    age: "",
    area: "",
    sex: "a",
  });

  const handleChange = (fieldName) => (value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const getJsonData = () => {
    console.log(JSON.stringify(formData, null, 2));
  };

  const data = [
    { date: "2023-01", uv: 4000, pv: 2400 },
    { date: "2023-02", uv: 3000, pv: 1398 },
    { date: "2023-03", uv: 2000, pv: 9800 },
    { date: "2023-04", uv: 2780, pv: 3908 },
    { date: "2023-05", uv: 1890, pv: 4800 },
  ];

  const salesData = [
    { product: "A", sales: 4000 },
    { product: "B", sales: 3000 },
    { product: "C", sales: 2000 },
    { product: "D", sales: 2780 },
  ];

  const sexOptions = [
    { value: "m", label: "Мужской" },
    { value: "f", label: "Женский" },
    { value: "a", label: "Любой" },
  ];

  async function handleClick(current) {
    setModal(!current);
    setClick(true);
    await new Promise((resolve) => setTimeout(resolve, 1));
    setClick(false);
  }

  async function handlePress() {
    setClick(true);
    console.log(click);
    await new Promise((resolve1) => setTimeout(resolve1, 1));
    setClick(false);
  }

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
        <h3>Поиск</h3>
        <InputMenuItem
          label='Возраст'
          icon={<TbRating18Plus />}
          storageKey={"age"}
          value={formData.age}
          onChange={handleChange("age")}
        />
        <InputMenuItem
          label='Область поиска'
          icon={<FaPlusMinus />}
          storageKey={"area"}
          value={formData.area}
          onChange={handleChange("area")}
        />
        <DropdownMenuItem
          label='Пол'
          value={formData.sex}
          onChange={handleChange("sex")}
          options={sexOptions}
          icon={<PiGenderIntersexBold />}
          click={press}
        />
        <button className='confirmbtn' onClick={getJsonData}>
          Применить
        </button>
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
      <div className='settings-punct centeralign'>
        <h3>Аналитика</h3>
        <SettingBar
          label='Показать аналитику'
          onChange={() => handleClick(modal)}
          icon={<TiChartPieOutline />}
        />

        <Modal open={modal} className='analytics-window'>
          <div className='analytics-grid'>
            {/* Линейный график 1 */}
            <div className='graphic'>
              <h2>График 1</h2>
              <div className='graphic-line'>
                <ResponsiveContainer width='100%' height='100%'>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='date' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey='uv' stroke='#8884d8' />
                    <Line type='monotone' dataKey='pv' stroke='#82ca9d' />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Линейный график 2 */}
            <div className='graphic'>
              <h2>График 2</h2>
              <div className='graphic-line'>
                <ResponsiveContainer width='100%' height='100%'>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='date' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey='pv' stroke='#ff7300' />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Столбчатая диаграмма */}
            <div className='graphic'>
              <h2>График 3</h2>
              <div className='graphic-line'>
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='product' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='sales' fill='#8884d8' />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <IoMdCloseCircle
            className='close-btn'
            onClick={() => handleClick(modal)}
          />
        </Modal>
      </div>
    </>
  );
}
