import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DDesktop from "../../assets/destination/background-destination-desktop.jpg";
import DTablet from "../../assets/destination/background-destination-tablet.jpg";
import DMobile from "../../assets/destination/background-destination-mobile.jpg";

export const Container = styled.main`
  background-image: url("${DMobile}");
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
    background-image: url(${DTablet});
  }
  @media (min-width: 1280px) {
    background-image: url(${DDesktop});
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const Header = styled.div`
  font-family: "Barlow Condensed";
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 2.7px;
  font-size: 20px;
  font-weight: 200;
  font-family: "Barlow Condensed";
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 2.7px;
  font-size: 20px;
  font-weight: 200;
  margin-top: 100px;

  @media (min-width: 768px) {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 3.38px;
    margin: 0 0 0 -400px;
  }
  @media (min-width: 768px) {
    font-size: 25px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 3.38px;
    margin: 150px 0 0 -400px;
  }

  @media (min-width: 1280px) {
    font-weight: 400;
    font-size: 28px;
    letter-spacing: 4.725px;
    margin: 0 0 0 -700px;
  }
  @media (min-width: 1280px) {
    font-weight: 400;
    font-size: 28px;
    letter-spacing: 4.725px;
    margin: 200px 0 0 -700px;
  }
`;

export const Span = styled.span`
  padding-right: 15px;
  opacity: 0.25;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 2.7px;
`;

export const Number = styled.span`
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
  @media (min-width: 768px) {
    font-size: 25px;
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
  padding: 29px 0 58px 0;

  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 1200px;
    padding: 0;
  }
`;

export const Image = styled.img`
  width: 170px;
  height: 170px;
  margin-bottom: 29px;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
    margin: 50px 0 53px 0;
  }

  @media (min-width: 1280px) {
    width: 445px;
    height: 445px;
  }
  @media (min-width: 1280px) {
    width: 350px;
    height: 350px;
  }
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    width: 575px;
  }

  @media (min-width: 1280px) {
    width: 445px;
    align-items: flex-start;
  }
`;

export const DestinationNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.3625px;
  margin-bottom: 20px;
  font-family: "Barlow Condensed";
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }

  @media (min-width: 1280px) {
    justify-content: flex-start;
    font-family: "Barlow Condensed";
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    margin: 0;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding: 0 0 15px 0;
  width: 237px;
  list-style: none;
  border-bottom: 2px solid transparent;

  @media (min-width: 768px) {
    justify-content: space-around;
  }

  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;

export const Link = styled(NavLink)`
  color: #d0d6f9;
  text-decoration: none;

  &.active {
    border-bottom: 2px solid white;
    color: white;
  }
`;

export const Planet = styled.section`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 575px;
  }

  @media (min-width: 1280px) {
    width: 475px;
    align-items: flex-start;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-family: "Bellefair";
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  text-align: center;
  color: white;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 80px;
    line-height: 91.68px;
  }

  @media (min-width: 1280px) {
    font-size: 100px;
    line-height: 115px;
  }
`;

export const Info = styled.p`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  color: #d0d6f9;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  width: 327px;
  margin: 0 0 20px 0;
  height: 125px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    width: 575px;
    height: 84px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
    line-height: 32px;
    width: 450px;
    margin: 0 0 50px 0;
    text-align: left;
  }
`;

export const Data = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #383b4b;
  margin: 20px 24px 0 24px;
  width: 80%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  @media (min-width: 1280px) {
    width: 100%;
    margin-left: 0;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const DataInfo = styled.div`
  margin: 32px 0 0 0;
  padding: 0;
  text-align: center;

  @media (min-width: 768px) {
    margin: 28px 0 0 0;
  }

  @media (min-width: 1280px) {
    text-align: left;
    &:nth-child(2) {
      margin-left: 79px;
    }
  }
`;

export const DataP = styled.p`
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.36px;
  text-transform: uppercase;
  color: #d0d6f9;
`;

export const DataSpan = styled.span`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: #ffffff;
`;
