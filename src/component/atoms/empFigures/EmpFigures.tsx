import React from "react";
import { Text, BoxProps } from "rebass";

interface EmpFiguresProps extends BoxProps {
  figure: string | number;
  children: React.ReactNode;
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
      {figure} {children}
    </Text>
  );
}

export default EmpFigures;
