import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

export const ListItem = styled(Link)`
  ${({ size }) =>
    size === "big" &&
    css`
      display: inline;
      font-family: "Barlow Condensed", sans-serif;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
      color: #ffffff;
      margin: 0 10px;
      text-decoration: none;
      border-bottom: 3px transparent solid;
      padding: 30px 0 5px 0;

      @media (min-width: 768px) {
        font-size: 14px;
        padding: 25px 0;
      }

      @media (min-width: 1280px) {
        font-size: 16px;
      }
    `}
  ${({ size }) =>
    size === "medium" &&
    css`
      color: #d0d6f9;
      text-decoration: none;
    `}

  ${({ size }) =>
    size === "main" &&
    css`
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
      text-decoration: none;
      color: black;

      @media (min-width: 768px) {
        width: 242px;
        height: 242px;
        line-height: 37px;
        letter-spacing: 2px;
        padding: 0;
        font-size: 32px;
      }

      @media (min-width: 1280px) {
        margin: 220px 0 0 0;
      }
    `}

  ${({ to }) => {
    const location = useLocation();
    return (
      location.pathname === to &&
      css`
        border-bottom: 3px white solid;
      `
    );
  }}
`;

export const Number = styled.span`
  font-weight: bold;
`;
