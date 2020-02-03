import React from "react";
import { Button, ButtonProps } from "rebass";

interface TabButtonProps extends ButtonProps {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
}

function TabButton({ name, onClick, isActive }: TabButtonProps) {
  return (
    <Button
      variant="tab"
      onClick={onClick}
      sx={{
        color: isActive ? "point" : "black"
      }}
    >
      {name}
    </Button>
  );
}

export default TabButton;
