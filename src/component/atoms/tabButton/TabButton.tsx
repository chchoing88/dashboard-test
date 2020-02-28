import React from "react";
import { Button, ButtonProps } from "rebass";

import { THEME } from "./TabButton.styled";

interface TabButtonProps extends ButtonProps {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
  theme: "underLine" | "fill";
  children?: never;
}

function TabButton({ name, onClick, theme, isActive }: TabButtonProps) {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: "100%",
        outline: "none",
        textAlign: "center",
        ...THEME[theme].button(isActive)
      }}
    >
      {name}
    </Button>
  );
}

export default TabButton;
