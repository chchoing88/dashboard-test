import React from "react";
import { Heading } from "rebass"; // react primitive ui
import { Link } from "react-router-dom";
import { logoStyle } from "./Logo.styled";

function Logo() {
  return (
    <Heading as="h1" sx={logoStyle}>
      <Link to="/">UFO Dashboard</Link>
    </Heading>
  );
}

export default Logo;
