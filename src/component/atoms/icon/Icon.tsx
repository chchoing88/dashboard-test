import React from "react";
import { Box, BoxProps } from "rebass";
import { iconCollection } from "./Icon.styled";

import { IconType } from "types";

type IconProps = BoxProps & {
  icon: IconType;
  children?: never;
};

function Icon({ icon, ...rest }: IconProps) {
  return <Box sx={iconCollection[icon]} {...rest}></Box>;
}

export default Icon;
