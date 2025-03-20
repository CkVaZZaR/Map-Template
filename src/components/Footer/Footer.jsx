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

export default function Footer({ active, onChange }) {
  return (
    <footer className='footer'>
      <IconLink
        className={active === "account" ? "active" : ""}
        onClick={() => onChange("account")}
      >
        <FaUser />
      </IconLink>

      <IconLink
        className={active === "home" ? "active" : ""}
        onClick={() => onChange("home")}
      >
        <FaClone />
      </IconLink>

      <IconLink
        className={active === "settings" ? "active" : ""}
        onClick={() => onChange("settings")}
      >
        <FaCog />
      </IconLink>
    </footer>
  );
}
