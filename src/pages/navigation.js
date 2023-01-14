import { Navigation, ImgLogo, Menu, MenuList, Span, Hamburger, CloseIcon } from "../style/navigation/styled";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import hamburger from "../assets/shared/icon-hamburger.svg";
import { useState} from "react";
import closeIcon from "../assets/shared/icon-close.svg";

export const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
      <>
    <Navigation>
            <ImgLogo src={logo} alt="Space logo" />
        <Menu open={navOpen}>
          <CloseIcon src={closeIcon}></CloseIcon>
                <MenuList className="menu-list">
                    <Link to="/space-tourism/" className="menu-item"><Span><strong>00</strong> HOME</Span></Link>
                    <Link to="/destination/" className="menu-item"><Span><strong>01</strong> DESTINATION</Span></Link>
                    <Link to="/crew/" className="menu-item"><Span><strong>02</strong> CREW</Span></Link>
                    <Link to="/technology/" className="menu-item"><Span><strong>03</strong> TECHNOLOGY</Span></Link>
                </MenuList>
                </Menu>
      </Navigation>
      <Hamburger src={navOpen ? closeIcon : hamburger} onClick={() => setNavOpen(c => !c)}></Hamburger>
      </>
    )
}