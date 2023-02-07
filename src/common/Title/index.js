import React from "react";
import { Header, Number } from "./styled";

function Title({ title, number }) {
  return (
    <Header>
      <Number>{number}</Number>
      {title}
    </Header>
  );
}

export default Title;
