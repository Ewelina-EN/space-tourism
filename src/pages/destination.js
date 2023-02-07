import React, { useState } from "react";
import {
  Container,
  Header,
  Span,
  Section,
  Image,
  Tab,
  Planet,
  Title,
  Info,
  Data,
  DataInfo,
  DataP,
  DataSpan,
  DestinationNav,
  MenuList,
  Link,
} from "../style/destination/styled";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

// TODO: przeczytaj o require
const data = require("../data.json");

export default function Destination() {
  const [destinationId, setDestinationId] = useState(0);

  // Data of Destination from data
  const { name, description, distance, travel } =
    data.destinations[destinationId];

  const change = (e, id) => {
    e.preventDefault();
    setDestinationId(id);
  };

  const image = () => {
    if (name === "Moon") {
      return moon;
    }
    if (name === "Mars") {
      return mars;
    }
    if (name === "Europa") {
      return europa;
    }
    return titan;
  };

  return (
    <Container>
      <Header>
        <Span>01</Span>Pick your destination
      </Header>
      <Section>
        <Image src={image()} name={name} alt="photo of the planet" />
        <Tab>
          <DestinationNav>
            <MenuList>
              <Link to="/" onClick={(e) => change(e, 0)}>
                Moon
              </Link>
              <Link to="/" onClick={(e) => change(e, 1)}>
                Mars
              </Link>
              <Link to="/" onClick={(e) => change(e, 2)}>
                Europe
              </Link>
              <Link to="/" onClick={(e) => change(e, 3)}>
                Titan
              </Link>
            </MenuList>
          </DestinationNav>
          <Planet>
            <Title>{name}</Title>
            <Info>{description}</Info>
          </Planet>
          <Data>
            <DataInfo>
              <DataP className="">Avg. distance</DataP>
              <DataSpan>{distance}</DataSpan>
            </DataInfo>
            <DataInfo>
              <DataP className="">Est. travel time</DataP>
              <DataSpan className="">{travel}</DataSpan>
            </DataInfo>
          </Data>
        </Tab>
      </Section>
    </Container>
  );
}
