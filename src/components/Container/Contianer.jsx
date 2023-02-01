import React from "react";
import { MainContainer } from "./style";

export default function Contianer({ children }) {
  return (
    <>
      <MainContainer>{children}</MainContainer>
    </>
  );
}
