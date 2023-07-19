import React from "react";
import Paragraph from "../common/Paragraph";
import {
  Container,
  TextSection,
  SmallHeader,
  BigHeader,
} from "../style/homepage/styled";
import NavButton from "../common/NavButton";

export default function Homepage() {
  return (
    <Container>
      <TextSection>
        <SmallHeader>SO, YOU WANT TO TRAVEL TO</SmallHeader>
        <BigHeader>SPACE</BigHeader>
        <Paragraph
          page="home"
          description="Let’s face it; if you want to go to space, you might as well genuinely go
      to outer space and not hover kind of on the edge of it. Well sit back, and
      relax because we’ll give you a truly out of this world experience!"
        />
      </TextSection>
      <NavButton name="EXPLORE" link="/destination" size="main" />
    </Container>
  );
}
