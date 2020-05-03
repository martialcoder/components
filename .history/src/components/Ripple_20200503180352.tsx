import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

type PropsTypes = {
  image?: string;
  color?: string;
  spacing?: string | number;
};

const ripple = keyframes`
 from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(10);
  }
`;

const Ripple = styled.button<PropsTypes>`
  border: none;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #2196f3;
  box-shadow: 0 0 4px #999;
  outline: none;
  background-position: center;
  transition: background 0.8s;
  &:active {
    background-color: #6eb9f7;
    background-size: 100%;
    transition: background 0s;
  }
  &:hover {
    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
      center/15000%;
  }
`;

export default Ripple;
