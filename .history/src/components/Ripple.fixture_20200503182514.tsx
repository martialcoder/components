import React from "react";
import Ripple from "./Ripple";
import App from "../App";
import Base from "./Base";

export default (
  <Base color="red" spacing="20px 10px">
    <Ripple delay=".5s"></Ripple>
    <Ripple size={200}></Ripple>
    <Ripple size={400}></Ripple>
  </Base>
);
