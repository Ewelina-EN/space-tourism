import { Container, Header, HeaderSpan, Section, Image, MenuList, Link, Span, TechNav, Info, Title, Keyword, Definition } from "../style/technology/styled";
import vehicle from "../assets/technology/image-launch-vehicle-landscape.jpg";
import capsule from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import { useState } from "react";

const data = require("../data.json");

export const Technology = () => {

    const [technologyId, setTechnologyId] = useState(0);
    const { name, description } = data.technology[technologyId];

    const change = (e, id) => {
        e.preventDefault();
        setTechnologyId(id);
    }

    const image = () => {
        if (name === "Launch vehicle") {
            return vehicle;
        } else if (name === "Spaceport") {
            return spaceport;
        } else {
            return capsule;
        }
    }
    return (
        <>
            <Container>
            <Header>
                    <HeaderSpan>03</HeaderSpan> Space launch 101</Header>
                    <Image src={image()} name={name} alt="photo of the crew" />
                <Section>
                    <TechNav>
                        <MenuList>
                            <Link to="/" onClick={(e) => change(e, 0)}><Span>1</Span></Link>
                            <Link to="/" onClick={(e) => change(e, 1)}><Span>2</Span></Link>
                            <Link to="/" onClick={(e) => change(e, 2)}><Span>3</Span></Link>
                        </MenuList>
                    </TechNav> 
                    <Info>
                        <Title>The terminology...</Title>
                        <Keyword>{ name }</Keyword>
                        <Definition>{description}</Definition>
                    </Info>
                </Section>
            </Container>
        </>
        
    )
}