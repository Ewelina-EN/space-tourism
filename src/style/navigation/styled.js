import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  font-family: "Barlow", sans-serif;

  @media (min-width: 768px) {
    align-items: center;
  }

  @media (min-width: 1280px) {
    margin-top: 60px;
  }
`;

export const ImgLogo = styled.img`
  width: 40px;
  margin: 24px 0 0 24px;

  @media (min-width: 768px) {
    margin: 0 0 0 60px;
    width: 48px;
  }
`;

export const Line = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: inline;
    position: absolute;
    top: 50%;
    height: 1px;
    width: calc(100% - 950px);
    right: 0;
    transform: translateY(-50%) translateX(-820px);
    opacity: 0.2514851987361908;
    background: #fff;
  }
`;

export const Menu = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  backdrop-filter: blur(10px);
  margin: 0;
  transform: ${({ open }) => (open ? "translateX(0%);" : "translateX(100%);")};

  @media (min-width: 768px) {
    transform: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 60px 140px 340px 22px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    /* margin: 0; */
  }

  @media (min-width: 1280px) {
    position: absolute;
    justify-content: space-evenly;
    /* padding: 30px 100px; */
    width: 850px;
  }
`;

export const Number = styled.span`
  font-weight: 700;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Hamburger = styled.img`
  width: 30px;
  cursor: pointer;
  margin: 24px 24px 0 0;
  position: absolute;
  right: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;
