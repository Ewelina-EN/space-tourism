import styled from "styled-components";

export const Navigation = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: fixed;
    width: 100%;

    @media (min-width: 1280px) {
        align-items: center;
    }
`;

export const ImgLogo = styled.img`
  width: 40px;
  margin: 24px 0 0 24px;
  
    @media (min-width: 768px) {
        margin: 24px 0 0 39px;
        width: 48px;
    }
`;

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
    transform: ${({ open }) => (open ? "translateX(0%);" : "translateX(100%);")};
    
     @media (min-width: 768px) {
        display: flex;
    }

    @media (min-width: 1280px) {
        display: flex;
    }

`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 60px 160px 340px 22px; 

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 50px;
        width: 500px;
    }

    @media (min-width: 1208px) {
        justify-content: space-evenly;
        width: 830px;
    }
`;

export const Span = styled.span`
    display: inline-block;
    font-family: 'Barlow Condensed';
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #FFFFFF;
    margin: 0 10px;
    text-decoration: none;
    border-bottom: 3px transparent solid;
    padding: 30px 0 5px 0;
    margin: 0;

     @media (min-width: 768px) {
        padding: 0;
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

export const CloseIcon = styled.img`
    width: 30px;
    cursor: pointer;
    margin: 24px 24px 0 0;

    @media (min-width: 768px) {
        display: none;
    }
    @media (min-width: 1280px) {
        display: none;
    }
`;