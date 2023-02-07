import React, { useState } from "react";
import {
  Container,
  Section,
  Image,
  MenuList,
  Link,
  Span,
  TechNav,
  Info,
  Terminology,
  Keyword,
  Definition,
  TechInfo,
} from "../style/technology/styled";
import vehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsule from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import Title from "../common/Title";

const data = require("../data.json");

export default function Technology() {
  const [technologyId, setTechnologyId] = useState(0);
  const { name, description } = data.technology[technologyId];

  const change = (e, id) => {
    e.preventDefault();
    setTechnologyId(id);
  };

  const image = () => {
    if (name === "Launch vehicle") {
      return vehicle;
    }
    if (name === "Spaceport") {
      return spaceport;
    }
    return capsule;
  };
  return (
    <Container>
      <Title number="03" title="Space launch 101" />
      <Section>
        <Image src={image()} name={name} alt="photo of the crew" />
        <TechInfo>
          <TechNav>
            <MenuList>
              <Link to="/" onClick={(e) => change(e, 0)}>
                <Span>1</Span>
              </Link>
              <Link to="/" onClick={(e) => change(e, 1)}>
                <Span>2</Span>
              </Link>
              <Link to="/" onClick={(e) => change(e, 2)}>
                <Span>3</Span>
              </Link>
            </MenuList>
          </TechNav>
          <Info>
            <Terminology>The terminology...</Terminology>
            <Keyword>{name}</Keyword>
            <Definition>{description}</Definition>
          </Info>
        </TechInfo>
      </Section>
    </Container>
  );
}
