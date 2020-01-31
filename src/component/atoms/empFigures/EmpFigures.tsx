import React from "react";
import { Text, BoxProps } from "rebass";
import { comma } from "utils";

interface EmpFiguresProps extends BoxProps {
  figure: number;
  children?: React.ReactElement;
}

function EmpFigures({ figure, children, ...rest }: EmpFiguresProps) {
  return (
    <Text
      sx={{
        fontSize: 7,
        color: "point"
      }}
      {...rest}
    >
      {comma(figure)} {children}
    </Text>
  );
}

export default EmpFigures;
