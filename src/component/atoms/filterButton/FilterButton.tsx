import React from "react";
import { Button } from "rebass";

import { filterButtonStyle } from "./FilterButton.styled";

type FilterButtonProps = {
  name: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function FilterButton({ name, onClick }: FilterButtonProps) {
  return (
    <Button variant="identifier" sx={filterButtonStyle} onClick={onClick}>
      {name}
    </Button>
  );
}

export default FilterButton;
