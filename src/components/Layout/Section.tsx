import styled from "@emotion/styled";

type PropsTypes = {
  image?: string;
  color?: string;
  spacing?: string | number;
};

const Section = styled.div<PropsTypes>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: ${({ spacing = "0" }) =>
    typeof spacing === "number" ? `${spacing.toFixed(0)}px` : spacing};
  background-color: ${({ color = "transparent" }) => color};
  background-image: ${({ image = "none" }) => image};
`;

export default Section;
