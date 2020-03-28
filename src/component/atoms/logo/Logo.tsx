import React from "react";
import { Heading } from "rebass"; // react primitive ui
// import { Link } from "react-router-dom";
import AuthLink from "component/common/authLink/AuthLink";
import { logoStyle } from "./Logo.styled";

function Logo() {
  return (
    <Heading as="h1" sx={logoStyle}>
      <AuthLink to="/">UFO Dashboard</AuthLink>
    </Heading>
  );
}

export default Logo;
