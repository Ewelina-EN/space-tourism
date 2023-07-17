import React from "react";
import { ListItem, Number } from "./styled";

function NavButton({ number, name, link, size }) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    // <>
    //   {link ? (
    //     <ListItem to={link} size={size}>
    //       <Number>{number}</Number> {name}
    //     </ListItem>
    //   ) : (
    //     <ListItem as="button" size={size}>
    //       <Number>{number}</Number> {name}
    //     </ListItem>
    //   )}
    // </>
    <ListItem to={link} size={size}>
      <Number>{number}</Number> {name}
    </ListItem>
  );
}

export default NavButton;
