import React from "react";
import { Heading } from "rebass";
import { Link } from "react-router-dom";

import { LogoStyle } from "./Logo.styled";

function Logo() {
  return (
    <Heading as="h1" sx={LogoStyle}>
      <Link to="/">UFO Dashboard</Link>
    </Heading>
  );
}

export default Logo;
