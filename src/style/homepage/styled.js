import styled from "styled-components";
import imgBackgroundMobile from "../../assets/home/background-home-mobile.jpg";
import imgBackgroundTablet from "../../assets/home/background-home-tablet.jpg";
import imgBackgroundDesktop from "../../assets/home/background-home-desktop.jpg";

export const Container = styled.main`
  background-image: url(${imgBackgroundMobile});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 100vh;

  @media (min-width: 768px) {
    background-image: url(${imgBackgroundTablet});
    justify-content: center;
  }
  @media (min-width: 1280px) {
    background-image: url(${imgBackgroundDesktop});
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const TextSection = styled.section`
  width: 327px;

  @media (min-width: 768px) {
    width: 450px;
    height: 334px;
    padding: 0;
    margin: 75px 0 100px 0;
  }
  @media (min-width: 1280px) {
    width: 650px;
    margin: 100px 0 0 0;
  }
`;

export const SmallHeader = styled.p`
  font-family: "Barlow Condensed";
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 2.7px;
  margin-top: 48px;
  color: #d0d6f9;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.375px;
  }

  @media (min-width: 1280px) {
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.7px;
    text-align: left;
  }
`;

export const BigHeader = styled.p`
  font-family: "Bellefair";
  font-weight: 400;
  margin: 0;
  color: #ffffff;
  font-size: 80px;
  line-height: 100px;
  text-align: center;

  @media (min-width: 768px) {
    line-height: 150px;
    margin: 24px 0;
    font-size: 150px;
  }

  @media (min-width: 1280px) {
    font-size: 150px;
    line-height: 172px;
    text-align: left;
  }
`;
