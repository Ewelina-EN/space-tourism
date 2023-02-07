import styled from "styled-components";

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
