import React from "react";
import { Header, Number } from "./styled";

function Title({ title, number, size }) {
  return (
    <Header size={size}>
      <Number>{number}</Number>
      {title}
    </Header>
  );
}

export default Title;
