import React from "react";
import { Button, ButtonProps, Text } from "rebass";
import NewBadge from "component/atoms/newBadge/NewBadge";

import { TabThemeType } from "types";
import { THEME } from "./TabButton.styled";

type TabButtonProps = ButtonProps & {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
  theme: TabThemeType;
  children?: never;
} & typeof defaultProps;

const defaultProps = {
  isNew: false
};

function TabButton({
  name,
  onClick,
  theme,
  isActive,
  isNew,
  ...rest
}: TabButtonProps) {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: "100%",
        outline: "none",
        textAlign: "center",
        ...THEME[theme].button(isActive)
      }}
      {...rest}
    >
      <Text sx={{ display: "inline-block", position: "relative" }}>
        {name} {isNew && <NewBadge></NewBadge>}
      </Text>
    </Button>
  );
}

TabButton.defaultProps = defaultProps;

export default TabButton;
