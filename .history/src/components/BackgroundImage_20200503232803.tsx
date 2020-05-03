import styled from "@emotion/styled";

const BackgroundImage = styled.div<{ url: string }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background-image: url(${({ url }) => url});
  width: 100%;
  height: 100%;
`;

export default BackgroundImage;
