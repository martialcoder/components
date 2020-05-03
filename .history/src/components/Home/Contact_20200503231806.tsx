import React from "react";
import Section from "../Layout/Section";
import Base from "../Layout/Base";
import HomeLogo from "./Logo";
import { keyframes } from "@emotion/core";
import { COLORS } from "../../styles/colors";
import { Hills } from "../../styles/icons";
import GradientWave from "../Animated/GradientWave";
import styled from "@emotion/styled";

const LogoContainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fadeIn = keyframes`
 from { opacity: 0 }
 to{ opacity: 1 }
`;

const Subtitle = styled.h1`
  font-weight: lighter;
  position: absolute;
  bottom: 4rem;
  width: 100%;
  text-align: center;
`;
const BrandContainer = styled.div`
  position: relative;
  path:nth-of-type(1) {
    fill: black;
  }
  path:nth-of-type(2) {
    fill: white;
    animation: ${fadeIn} ease 10s;
  }
`;

export default () => (
  <Section
    color={COLORS.serenity}
    spacing="20px 10px"
    style={{ alignItems: "center" }}
  >
    <Hills width="100vw" height="100px" />
    <GradientWave colors={["black", COLORS.curiousBlue]} />
    <h1>Flick me a message</h1>
  </Section>
);
