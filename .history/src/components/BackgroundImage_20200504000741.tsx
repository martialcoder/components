import styled from "@emotion/styled";

const BackgroundImage = styled.div<{ url: string }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export default BackgroundImage;
