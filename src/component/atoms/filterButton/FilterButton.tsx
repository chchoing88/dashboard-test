import React from "react";
import { Button, ButtonProps } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { IFilterButton } from "types";
import { filterButtonStyle } from "./FilterButton.styled";

interface FilterButtonProps extends ButtonProps {
  buttonItem: IFilterButton;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function FilterButton({ buttonItem, onClick, ...rest }: FilterButtonProps) {
  const { name, isActive } = buttonItem;
  return (
    <Button
      variant="identifier"
      sx={filterButtonStyle(isActive)}
      onClick={onClick}
      {...rest}
    >
      {isActive && <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>}
      {name}
    </Button>
  );
}

export default FilterButton;
