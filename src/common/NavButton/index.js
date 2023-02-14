import React from "react";
import { ListItem, Number } from "./styled";

function NavButton({ number, name, link }) {
  return (
    <ListItem to={link}>
      <Number>{number}</Number> {name}
    </ListItem>
  );
}

export default NavButton;
