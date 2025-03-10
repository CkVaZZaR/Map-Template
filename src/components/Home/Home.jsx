import React from "react";
import styled from "styled-components";
import CardContainer from "../CardContainer/CardContainer";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
`;

export default function Home() {
  return <CardContainer />;
}
