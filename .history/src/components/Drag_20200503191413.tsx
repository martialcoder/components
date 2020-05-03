import { useSpring } from "react-spring";
import React, { useCallback } from "react";
import { useMove } from "react-use-gesture";
import styled from "@emotion/styled";
import Magnet from "./Magnet";

const getPx = (value: number) => `${value}px`;

const Container = styled.div``;

export default function Card() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const bind = useMove(({ offset: [x, y] }) => set({ xy: [x, y] }));

  return (
    <Container {...bind()}>
      <Magnet
        className="ying-yang-img"
        xy={props.xy}
        repel={1}
        style={{
          width: getPx(150),
          height: getPx(150),
          borderRadius: "50%",
          boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)",
        }}
      />
      <Magnet
        className="cloud-img"
        xy={props.xy}
        repel={0.9}
        width={getPx(150)}
        height={getPx(150)}
      />
      <Magnet
        className="meditation-img"
        xy={props.xy}
        repel={0.8}
        width={getPx(150)}
        height={getPx(150)}
      />
    </Container>
  );
}
