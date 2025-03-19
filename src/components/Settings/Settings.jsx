import React from "react";
import styled from "styled-components";
import ThemeToggle from "../themeToggle/themeToggle";

const Container = styled.div`
  padding: 1rem;
  text-align: center;
`;

export default function Settings() {
  return (
    <Container>
      <h1>Настройки</h1>
      <br />
      <ThemeToggle />
    </Container>
  );
}
