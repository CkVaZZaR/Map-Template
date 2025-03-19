import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaClone, FaUser, FaCog } from "react-icons/fa";
import "./Footer.css";

const IconLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.5s;
`;

export default function Footer() {
  const [tab, setTab] = useState("home");

  return (
    <footer className='footer'>
      <IconLink
        onClick={(tab) => setTab("acc")}
        className={tab === "acc" && "active"}
        to='/account'
      >
        <FaUser />
      </IconLink>

      <IconLink
        onClick={(tab) => setTab("home")}
        className={tab === "home" && "active"}
        to='/'
      >
        <FaClone />
      </IconLink>

      <IconLink
        onClick={(tab) => setTab("settings")}
        className={tab === "settings" && "active"}
        to='/settings'
      >
        <FaCog />
      </IconLink>
    </footer>
  );
}
