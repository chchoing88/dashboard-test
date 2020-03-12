import React from "react";
import { Text, BoxProps } from "rebass";
import NewBadge from "../newBadge/NewBadge";

type WidgetHeaderProps = BoxProps & {
  title: string;
  children?: never;
} & typeof defaultProps;

const defaultProps = {
  isNew: false
};

function WidgetHeader({ title, isNew, ...rest }: WidgetHeaderProps) {
  return (
    <Text
      as="strong"
      sx={{
        display: "block",
        py: "10px",
        bg: "base",
        textAlign: "center",
        fontSize: "15px"
      }}
      {...rest}
    >
      <Text sx={{ position: "relative", display: "inline-block" }}>
        {title} {isNew && <NewBadge></NewBadge>}
      </Text>
    </Text>
  );
}

WidgetHeader.defaultProps = defaultProps;

export default WidgetHeader;
