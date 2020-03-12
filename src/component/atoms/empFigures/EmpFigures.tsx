import React from "react";
import { Text, BoxProps } from "rebass";

type EmpFiguresProps = BoxProps & {
  figure: string | number;
  children: React.ReactNode;
};

function EmpFigures({ figure, children, ...rest }: EmpFiguresProps) {
  return (
    <Text
      sx={{
        fontSize: "44px",
        color: "point"
      }}
      {...rest}
    >
      <Text
        sx={{
          display: "inline-block",
          paddingRight: "4px",
          letterSpacing: "-1px"
        }}
      >
        {figure}
      </Text>
      {children}
    </Text>
  );
}

export default EmpFigures;
