import React, { useState } from "react";
import {
  Container,
  Section,
  Image,
  CrewNavigation,
  MenuList,
  Link,
  Span,
  SectionCrew,
  Role,
  Name,
  Info,
  PersonInfo,
} from "../style/crew/styled";
import commander from "../assets/crew/image-douglas-hurley.png";
import specialist from "../assets/crew/image-mark-shuttleworth.png";
import pilot from "../assets/crew/image-victor-glover.png";
import engieneer from "../assets/crew/image-anousheh-ansari.png";
import Title from "../common/Title";

const data = require("../data.json");

export default function Crew() {
  const [crewId, setCrewId] = useState(0);

  const { name, role, bio } = data.crew[crewId];

  const change = (e, id) => {
    e.preventDefault();
    setCrewId(id);
  };

  const image = () => {
    if (role === "Commander") {
      return commander;
    }
    if (role === "Mission Specialist") {
      return specialist;
    }
    if (role === "Pilot") {
      return pilot;
    }
    return engieneer;
  };

  return (
    <Container>
      <Title number="02" title="Meet your crew" />
      <Section>
        <Image src={image()} name={name} alt="photo of the crew" />
        <SectionCrew>
          <CrewNavigation>
            <MenuList>
              <Link to="/" onClick={(e) => change(e, 0)}>
                <Span />
              </Link>
              <Link to="/" onClick={(e) => change(e, 1)}>
                <Span />
              </Link>
              <Link to="/" onClick={(e) => change(e, 2)}>
                <Span />
              </Link>
              <Link to="/" onClick={(e) => change(e, 3)}>
                <Span />
              </Link>
            </MenuList>
          </CrewNavigation>
          <PersonInfo>
            <Role>{role}</Role>
            <Name>{name}</Name>
            <Info>{bio}</Info>
          </PersonInfo>
        </SectionCrew>
      </Section>
    </Container>
  );
}
