import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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
        padding: 0 20px 0 0;
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
`;

export const Number = styled.span`
  font-weight: bold;
`;
