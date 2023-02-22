import styled, { css } from "styled-components";

export const Header = styled.div`
  ${({ size }) =>
    size === "big" &&
    css`
      font-family: "Barlow Condensed";
      text-transform: uppercase;
      color: #ffffff;
      font-size: 20px;
      font-weight: 200;
      font-family: "Barlow Condensed";
      text-transform: uppercase;
      color: #ffffff;
      letter-spacing: 2px;
      margin-top: 100px;

      @media (min-width: 768px) {
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 3px;
        margin: 200px 0 0 -400px;
      }

      @media (min-width: 1280px) {
        font-weight: 400;
        font-size: 28px;
        letter-spacing: 4px;
        /* margin: 0; */
        margin: 200px 0 -25px -820px;
      }
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      font-family: "Barlow Condensed";
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      letter-spacing: 2px;
      color: #d0d6f9;
      text-transform: uppercase;
      margin: 0 0 10px 0;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
      }
    `}
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
    letter-spacing: 3.3px;
  }
  @media (min-width: 768px) {
    font-size: 25px;
    line-height: 24px;
    letter-spacing: 3.3px;
  }

  @media (min-width: 1280px) {
    font-size: 28px;
    letter-spacing: 4.7px;
  }
`;
