import React from "react";
import { Content } from "./styled";

function Paragraph({ description, page }) {
  return <Content page={page}>{description}</Content>;
}

export default Paragraph;
