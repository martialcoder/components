import { rgba } from "polished";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

type PropsTypes = {
  delay?: string;
  duration?: string;
  size?: number;
  colors?: string[];
};

const move = keyframes`
0% {
    
    transform: translateY(0%);
  }
20% {
    
    transform: translateY(10px);
  }
50% {
    
    transform: translateY(0%);
  }
 80% {
    
    transform: translateY(-10px)
  }
100% {
    
    transform: translateY(0%);
  }
`;

const UpAndDown = styled.div<PropsTypes>`
  animation: ${move} 5s linear infinite;
  animation-direction: alternate;
`;

export default UpAndDown;
