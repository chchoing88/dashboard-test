import React from "react";
import { Button, ButtonProps } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { filterButtonStyle } from "./FilterButton.styled";

type FilterButtonProps = ButtonProps & {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: never;
} & typeof defualtProps;

const defualtProps = {
  name: "",
  isActive: false,
  isDisable: false
};

function FilterButton({
  name,
  isActive,
  isDisable,
  onClick,
  ...rest
}: FilterButtonProps) {
  return (
    <Button
      variant="identifier"
      sx={filterButtonStyle(isActive, isDisable)}
      onClick={isDisable ? () => {} : onClick}
      {...rest}
    >
      {isActive && <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>}
      {name}
    </Button>
  );
}

FilterButton.defaultProps = defualtProps;

export default FilterButton;
