import React from "react";
import { Button, Box } from "rebass";

import { IFilterButton } from "@types";
import { filterButtonStyle, circleStyle } from "./FilterButton.styled";

type FilterButtonProps = {
  buttonItem: IFilterButton;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function FilterButton({ buttonItem, onClick }: FilterButtonProps) {
  const { name, isActive } = buttonItem;
  return (
    <Button
      variant="identifier"
      sx={filterButtonStyle(isActive)}
      onClick={onClick}
    >
      <Box as="span" sx={circleStyle(isActive)}></Box>
      {name}
    </Button>
  );
}

export default FilterButton;
