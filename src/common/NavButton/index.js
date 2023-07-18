import React from "react";
import { ListItem, Number } from "./styled";

function NavButton({ number, name, link, size, onClick }) {
  return (
    <ListItem to={link} size={size} onClick={onClick}>
      <Number>{number}</Number> {name}
    </ListItem>
  );
}

export default NavButton;
