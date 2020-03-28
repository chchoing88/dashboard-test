import React from "react";
import { Box, BoxProps } from "rebass";

type CheckBoxProps = {} & BoxProps;

function CheckBox({ css, ...rest }: CheckBoxProps) {
  return (
    <Box sx={{ position: "relative" }} css={css}>
      <Box
        as="input"
        type="checkbox"
        {...rest}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          "& + div": {
            width: "14px",
            height: "14px",
            backgroundColor: "clean",
            border: "1px solid rgba(0,0,0,0.1)",
            outline: "none"
          },
          "&:checked + div": {
            backgroundColor: "point",
            "&:after": {
              content: '""',
              position: "absolute",
              left: "1px",
              top: "5px",
              backgroundColor: "clean",
              width: "2px",
              height: "2px",
              boxShadow:
                "2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white",
              transform: "rotate(45deg)"
            }
          }
        }}
      ></Box>
      <Box sx={{ position: "relative" }}></Box>
    </Box>
  );
}

export default CheckBox;
