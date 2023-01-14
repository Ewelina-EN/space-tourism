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
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  @media (min-width: 768px) {
    background-image: url(${imgBackgroundTablet});
  }
  @media (min-width: 1028px) {
    background-image: url(${imgBackgroundDesktop});
    flex-direction: row;
    justify-content: space-evenly;
    min-height: 760px;
  }
`;

export const TextSection = styled.section`
  width: 327px;

  @media (min-width: 768px) {
    width: 450px;
    height: 334px;
    padding: 0;
    margin: 65px 0 100px 0;
  }
  @media (min-width: 1028px) {
    width: 650px;
    margin: 0 0 0 0;
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

  @media (min-width: 1028px) {
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
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
  }

  @media (min-width: 1028px) {
    font-size: 150px;
    line-height: 172px;
  }
`;

export const Content = styled.p`
  color: #d0d6f9;
  font-family: "Barlow";
  font-size: 15px;
  line-height: 25px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }

  @media (min-width: 1028px) {
    font-size: 18px;
    line-height: 32px;
    padding: 0 90px;
    text-align: left;
  }
`;

export const HomeButton = styled.button`
  display: block;
  border-radius: 50%;
  border: 55px transparent;
  letter-spacing: 2px;
  overflow: visible;
  background-color: #ffffff00;
  margin-top: 50px;

  &:hover {
    background: transparent;
  }

  @media (min-width: 768px) {
    margin: 0 auto;

    &:hover {
      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(81.5485px);
    }

    @media (min-width: 1028px) {
      margin: 0;

      &:hover {
        background: transparent;
      }
    }
  }
`;

export const BtnSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 50%;
  font-family: "Bellefair";
  text-transform: uppercase;
  margin: 0;
  font-size: 20px;
  width: 150px;
  height: 150px;

  @media (min-width: 768px) {
    width: 242px;
    height: 242px;
    line-height: 37px;
    letter-spacing: 2px;
    padding: 0;
  }

  @media (min-width: 1028px) {
    font-size: 32px;
  }
`;
