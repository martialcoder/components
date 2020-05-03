import React from "react";
import Section from "../Layout/Section";
import Base from "../Layout/Base";
import { keyframes } from "@emotion/core";
import { COLORS } from "../../styles/colors";
import BackgroundImage from "../BackgroundImage";
import { MartialCoder, SOURCES } from "../../styles/icons";
import GradientWave from "../Animated/GradientWave";
import styled from "@emotion/styled";

const FormContainer = styled.div`
  position: relative;
  width: 500px;
  background: #80c64a;
  background: linear-gradient(45deg, ${COLORS.blueIzis}, ${COLORS.cerise});
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  padding: 72px 55px 65px 55px;
  color: white;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  width: 100%;
  transition: border-bottom-color ease 400ms;
  padding: 0.5rem 0.5rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  &:focus {
    border-bottom-color: rgba(255, 255, 255, 1) !important;
  }
`;
const Message = styled.textarea`
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  width: 100%;
  transition: border-bottom-color ease 400ms;
  padding: 0.5rem 0.5rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  &:focus {
    border-bottom-color: rgba(255, 255, 255, 1) !important;
  }
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
    style={{ alignItems: "center", justifyContent: "center" }}
  >
    <GradientWave colors={["black", COLORS.curiousBlue]} />
    <BackgroundImage
      url={SOURCES.hills}
      style={{ backgroundPositionY: "20vh", backgroundPositionX: "50%" }}
    />
    <FormContainer className="wrap-contact3">
      <h1>Flick me a message</h1>
      <Input placeholder="Your Name" />
      <Input placeholder="Your Email" />
      <Message placeholder="Your Message" />
    </FormContainer>
  </Section>
);
