import styled, { css } from "styled-components";

export const Content = styled.p`
  ${({ page }) =>
    page === "home" &&
    css`
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

      @media (min-width: 1280px) {
        font-size: 18px;
        line-height: 32px;
        padding: 0 180px 0 0;
        text-align: left;
      }
    `}
  ${({ page }) =>
    page === "destination" &&
    css`
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
    `}
  ${({ page }) =>
    page === "crew" &&
    css`
      font-family: "Barlow";
      color: #d0d6f9;
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      width: 100%;
      margin-top: 10px;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 28px;
      }

      @media (min-width: 1280px) {
        font-size: 18px;
        line-height: 32px;
        text-align: left;
        padding-right: 278px;
      }
    `}
  ${({ page }) =>
    page === "technology" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      color: #d0d6f9;
      font-family: "Barlow";
      line-height: 25px;
      padding: 26px 0;
      margin: 0;

      @media (min-width: 768px) {
        width: 456px;
      }

      @media (min-width: 1280px) {
        align-items: flex-start;
        justify-content: space-evenly;
      }
    `}
`;
