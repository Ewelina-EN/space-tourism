import React, { useState } from "react";
import {
  Container,
  Section,
  Image,
  Tab,
  Planet,
  PlanetName,
  Info,
  Data,
  DataInfo,
  DataP,
  DataSpan,
  DestinationNav,
  MenuList,
  ListItem,
} from "../style/destination/styled";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import Title from "../common/Title/index";
import NavButton from "../common/NavButton";

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
      <Title number="01" title="Pick your destination" />
      <Section>
        <Image src={image()} name={name} alt="photo of the planet" />
        <Tab>
          <DestinationNav>
            <MenuList>
              {/* <ListItem to="/" onClick={(e) => change(e, 0)}>
                Moon
              </ListItem> <ListItem to="/" onClick={(e) => change(e, 1)}>
                Mars
              </ListItem>
              <ListItem to="/" onClick={(e) => change(e, 2)}>
                Europe
              </ListItem>
              <ListItem to="/" onClick={(e) => change(e, 3)}>
                Titan
              </ListItem>
              */}
              <NavButton
                name="Moon"
                size="medium"
                link="/destination"
                onClick={(e) => change(e, 1)}
              />
              <NavButton
                name="Mars"
                size="medium"
                link="/destination"
                onClick={(e) => change(e, 1)}
              />
              <NavButton
                name="Europe"
                size="medium"
                link="/destination"
                onClick={(e) => change(e, 1)}
              />
              <NavButton
                name="Titan"
                size="medium"
                link="/destination"
                onClick={(e) => change(e, 1)}
              />
            </MenuList>
          </DestinationNav>
          <Planet>
            <PlanetName>{name}</PlanetName>
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
