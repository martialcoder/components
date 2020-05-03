import React from "react";
import Base from "../Layout/Base";
import Section from "../Layout/Section";
import Logo from "./Logo";
import { getRandomColors } from "../../styles/colors";

const sections = getRandomColors(5);

export default (
  <Base>
    <Section color={sections[0]} spacing="100px 100px">
      <Logo />
    </Section>
  </Base>
);
