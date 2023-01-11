import styled from "styled-components";
import TDesktop from "../../assets/technology/background-technology-desktop.jpg";
import TTablet from "../../assets/technology/background-technology-tablet.jpg";
import TMobile from "../../assets/technology/background-technology-mobile.jpg";
import { NavLink } from "react-router-dom";

export const Container = styled.main`
    background-image: url("${TMobile}");
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
        background-image: url(${TTablet});
      }
      
    @media (min-width: 1280px) {
        background-image: url(${TDesktop});
        justify-content: flex-end;
    }

    @media (min-width: 1990px) {
        align-items: center;
        justify-content: center;
    }
`;

export const Header = styled.div`
    font-family: 'Barlow Condensed';
    text-transform: uppercase;
    color: #FFFFFF;
    letter-spacing: 2.7px;
    font-size: 20px;
    font-weight: 200;

     @media (min-width: 768px) {
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 3.38px;
        margin: 0 0 0 -475px;
    }

    @media(min-width: 1280px) {
        font-weight: 400;
        font-size: 28px;
        letter-spacing: 4.725px;
        margin: 0 0 0 -800px;
    }
`;

export const HeaderSpan = styled.span`
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

    @media(min-width: 1280px) {
        font-size: 28px;
        letter-spacing: 4.725px;
    }
`;

export const Section = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 29px 30px;
    /* padding: 29px 0 58px 0; */

    @media (min-width: 768px) {
        flex-direction: column-reverse;
        width: 458px;
        margin: 40px 30px 0 30px;
    }

     @media(min-width: 1280px) {
        flex-direction: row-reverse;
        justify-content: space-evenly;
        align-items: flex-end;
        width: 1200px;
    }
`;


export const Image = styled.img`
        width: 177px;
        height: 222px;
        border-bottom: 2px solid #383B4B;
        
    @media (min-width: 768px) {
        width: 456px;
        height: 572px;
        margin: 40px 0;
        border-bottom: none;
    }

    @media (min-width: 1280px) {
        max-width:568px;
        max-height: 712px;
        border-bottom: none;
        margin: 0;
    }
`;

export const TechNav = styled.nav`
    width: 150px;
`;

export const MenuList = styled.ul`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0;
`;

export const Link = styled(NavLink)`
    color: #d0d6f9;
    text-decoration: none;

     &.active{
        color: white;
    }
`;

export const Span = styled.span`
    border: 1px solid #494A52;
    border-radius: 50%;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    height:40px;
    width: 40px;
    /* margin: 34px 15px 0 0; */

    &:nth-child(2) {
            margin-right: 0;
        }
`;

export const Info = styled.section`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    padding: 26px 0 100px 0;
    margin:0;
`;

export const Title = styled.p`
    font-family: 'Barlow Condensed';
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 2.3625px;
    color: #D0D6F9;
    text-transform: uppercase;
    margin: 0 0 10px 0;
`;

export const Keyword = styled.p`
    font-family: 'Bellefair';
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
    text-transform: uppercase;
    margin: 0;
`;

export const Definition = styled.p`
    color: #D0D6F9;
    font-family: 'Barlow';
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    width: 327px;
`;