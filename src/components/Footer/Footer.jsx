import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaClone, FaRegClone, FaUser, FaRegUser, FaCog } from "react-icons/fa";
import { FaRegCircleUser, FaCircleUser } from "react-icons/fa6";
import { BiCog, BiSolidCog } from "react-icons/bi";
import "./Footer.css";

const IconLink = styled(Link)`
  // text-decoration: none;
  // font-size: 1.5rem;
  // transition: color 0.5s;
`;

export default function Footer({ active, onChange }) {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <IconLink
          className={active === "account" ? "active" : ""}
          onClick={() => onChange("account")}
        >
          {active === "account" ? <FaUser /> : <FaRegUser />}
        </IconLink>

        <IconLink
          className={active === "home" ? "active" : ""}
          onClick={() => onChange("home")}
        >
          {active === "home" ? <FaClone /> : <FaRegClone />}
        </IconLink>

        <IconLink
          className={active === "settings" ? "active" : ""}
          onClick={() => onChange("settings")}
        >
          {active === "settings" ? <BiSolidCog /> : <BiCog />}
        </IconLink>
      </div>
    </footer>
  );
}
