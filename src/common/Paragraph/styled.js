import styled from "styled-components";

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

  @media (min-width: 1280px) {
    font-size: 18px;
    line-height: 32px;
    padding: 0 180px 0 0;
    text-align: left;
  }
`;
