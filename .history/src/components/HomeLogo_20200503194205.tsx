import { useSpring } from "react-spring";
import React, { useCallback, useState, useEffect } from "react";
import { useMove } from "react-use-gesture";
import styled from "@emotion/styled";
import Magnet from "./Magnet";
import { useWindowSize } from "../hooks/window";

const getPx = (value: number) => `${value}px`;

const Container = styled.div``;

const YingYang = ({ xy, size = 0, offset }: any) => (
  <Magnet
    className="ying-yang-img"
    xy={xy}
    offset={offset}
    repel={1}
    style={{
      width: getPx(size),
      height: getPx(size),
      borderRadius: "50%",
      boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)",
    }}
  />
);
const Cloud = ({ xy, size = 0, offset }: any) => {
  return (
    <Magnet
      className="cloud-img"
      offset={offset}
      xy={xy}
      repel={0.8}
      style={{
        width: getPx(size),
        height: getPx(size),
      }}
    />
  );
};
const Meditation = ({ xy, size = 0, offset }: any) => (
  <Magnet
    className="meditation-img"
    offset={offset}
    xy={xy}
    repel={0.6}
    style={{
      width: getPx(size),
      height: getPx(size),
    }}
  />
);
export default function HomeLogo() {
  const [size, setSizes] = useState({
    container: 0,
    yingYang: 0,
    cloud: 0,
    meditation: 0,
  });
  const { width } = useWindowSize();
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const bind = useMove(({ offset: [x, y] }) => set({ xy: [x, y] }));
  useEffect(() => {
    setSizes({
      container: width * 0.5,
      yingYang: width * 0.4,
      cloud: width * 0.2,
      meditation: width * 0.2,
    });
  }, [width]);
  return (
    <Container
      {...bind()}
      style={{
        width: getPx(size.container),
        height: getPx(size.container),
      }}
    >
      <YingYang xy={props.xy} size={size.yingYang} />
      <Cloud
        xy={props.xy}
        size={size.cloud}
        offset={{ x: size.yingYang / 2, y: -size.yingYang / 2 }}
      />
      <Meditation xy={props.xy} size={size.meditation} />
    </Container>
  );
}
