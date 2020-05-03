import { rgba } from "polished";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

type PropsTypes = {
  delay?: string;
  duration?: string;
  size?: number;
  color?: string;
};

const ripple = keyframes`
 from {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%) scale(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) scale(10);
  }
`;

const Ripple = styled.div<PropsTypes>`
  position: absolute;
  z-index: 0;
  flex: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  &::after {
    display: block;
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: ${({ color = "white" }) => rgba(color, 0.3)};
    border: 1px solid ${({ color = "white" }) => rgba(color, 0.6)};
    opacity: 0;
    width: ${({ size = 50 }) => size}px;
    height: ${({ size = 50 }) => size}px;
    top: 50%;
    left: 50%;
    animation-name: ${ripple};
    animation-duration: ${({ duration = "2s" }) => duration};
    animation-delay: ${({ delay = "2s" }) => delay};
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }
`;

export default Ripple;
