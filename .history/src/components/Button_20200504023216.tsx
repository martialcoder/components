import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { darken, invert } from "polished";

const bouncy = keyframes`
  0%{top:0em}
  25%{top:-0.4rem}
  50%{top:0em}
  75%{top:0.4rem}
  100%{top:0em;}
`;

const Button = styled.div<{ color?: string; delay?: string }>`
  animation: ${bouncy} 5s infinite ease-in-out;
  position: relative;
  display: block;
  padding: 0.35em 1.2em;
  border: 0.1em solid ${({ color = "#ffffff" }) => color};
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: bold;
  color: ${({ color = "#ffffff" }) => color};
  text-align: center;
  transition: background-color 0.2s, color 0.2s;
  animation-delay: ${({ delay = "0s" }) => delay};
  float: right;
  &:hover {
    color: ${({ color = "#ffffff" }) => invert(color)};
    background-color: ${({ color = "#ffffff" }) => color};
  }
  @media all and (max-width: 30em) {
    display: block;
    margin: 0.4em auto;
  }
`;

export default Button;
