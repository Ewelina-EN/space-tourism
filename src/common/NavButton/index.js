import React from "react";
import { ListItem, Number } from "./styled";

function NavButton({ number, name, link, size }) {
  return (
    <ListItem to={link} size={size}>
      <Number>{number}</Number> {name}
    </ListItem>
  );
}

export default NavButton;
