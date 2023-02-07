import styled from "styled-components";
import { NavLink } from "react-router-dom";
import TDesktop from "../../assets/technology/background-technology-desktop.jpg";
import TTablet from "../../assets/technology/background-technology-tablet.jpg";
import TMobile from "../../assets/technology/background-technology-mobile.jpg";

export const Container = styled.main`
  background-image: url("${TMobile}");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  @media (min-width: 768px) {
    background-image: url(${TTablet});
  }

  @media (min-width: 1280px) {
    background-image: url(${TDesktop});
  }

  @media (min-width: 1990px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Header = styled.div`
  font-family: "Barlow Condensed";
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 2.7px;
  font-size: 20px;
  font-weight: 200;
  margin: 32px 0 24px 0;

  @media (min-width: 768px) {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 3.38px;
    margin: 60px 0 0 -475px;
  }

  @media (min-width: 1280px) {
    font-weight: 400;
    font-size: 28px;
    letter-spacing: 4.725px;
    margin: 0 0 0 -750px;
  }
`;

export const HeaderSpan = styled.span`
  padding-right: 15px;
  opacity: 0.25;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 2.7px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.38px;
  }

  @media (min-width: 1280px) {
    font-size: 28px;
    letter-spacing: 4.725px;
  }
`;

export const Section = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 30px 0 24px;
  width: 100%;
  /* padding: 29px 0 58px 0; */

  @media (min-width: 1280px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    margin: 26px 0 0 0;
  }

  @media (min-width: 1990px) {
    width: 1200px;
    align-items: center;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  object-position: 50% 55%;

  @media (min-width: 768px) {
    height: 310px;
    margin: 40px 0;
  }

  @media (min-width: 1280px) {
    width: 515px;
    height: 527px;
    margin: 0;
    object-fit: none;
    object-position: 100% 100%;
  }
`;

export const TechInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 34px 0 0 0;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const TechNav = styled.nav`
  width: 150px;

  @media (min-width: 768px) {
    width: 210px;
  }

  @media (min-width: 1280px) {
    margin: 0 0 0 50px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 350px;
  }
`;

export const Link = styled(NavLink)`
  color: #d0d6f9;
  text-decoration: none;

  &.active {
    color: white;
  }
`;

export const Span = styled.span`
  border: 1px solid #494a52;
  border-radius: 50%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  height: 40px;
  width: 40px;
  /* margin: 34px 15px 0 0; */

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: 1280px) {
    width: 80px;
    height: 80px;
    font-size: 32px;
  }
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 26px 0;
  margin: 0;

  @media (min-width: 768px) {
    width: 456px;
  }

  @media (min-width: 1280px) {
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;

export const Title = styled.p`
  font-family: "Barlow Condensed";
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 2.3625px;
  color: #d0d6f9;
  text-transform: uppercase;
  margin: 0 0 10px 0;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
`;

export const Keyword = styled.p`
  font-family: "Bellefair";
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 46px;
  }

  @media (min-width: 1280px) {
    font-size: 50px;
    line-height: 64px;
  }
`;

export const Definition = styled.p`
  color: #d0d6f9;
  font-family: "Barlow";
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  width: 327px;

  @media (min-width: 768px) {
    width: 456px;
    font-size: 16px;
    line-height: 28px;
  }

  @media (min-width: 1280px) {
    width: 395px;
    text-align: left;
  }
`;
