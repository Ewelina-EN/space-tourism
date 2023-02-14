import React, { useState } from "react";
import {
  Navigation,
  ImgLogo,
  Menu,
  MenuList,
  Hamburger,
} from "../style/navigation/styled";
import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import NavButton from "../common/NavButton";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Navigation>
        <ImgLogo src={logo} alt="Space logo" />
        <Menu open={navOpen}>
          <MenuList>
            <NavButton number="00" name="HOME" link="/space-tourism" />
            <NavButton number="01" name="DESTINATION" link="/destination" />
            <NavButton number="02" name="CREW" link="/crew" />
            <NavButton number="03" name="TECHNOLOGY" link="/technology" />
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
