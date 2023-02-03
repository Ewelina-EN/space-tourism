import React, { useState } from "react";
import {
  Navigation,
  ImgLogo,
  Menu,
  MenuList,
  ListItem,
  Number,
  Hamburger,
} from "../style/navigation/styled";
import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Navigation>
        <ImgLogo src={logo} alt="Space logo" />
        <Menu open={navOpen}>
          <MenuList>
            <ListItem to="/space-tourism/">
              <Number>00</Number> HOME
            </ListItem>
            <ListItem to="/destination/">
              <Number>01</Number> DESTINATION
            </ListItem>
            <ListItem to="/crew/">
              <Number>02</Number> CREW
            </ListItem>
            <ListItem to="/technology/">
              <Number>03</Number> TECHNOLOGY
            </ListItem>
          </MenuList>
        </Menu>
      </Navigation>
      <Hamburger
        src={navOpen ? closeIcon : hamburgerIcon}
        onClick={() => setNavOpen(!navOpen)}
        alt="menu icon"
      />
    </>
  );
}
