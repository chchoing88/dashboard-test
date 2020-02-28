import React from "react";

import { Button, ButtonProps } from "rebass";

interface LookupButtonProps extends ButtonProps {
  children: React.ReactNode;
}

function LookupButton({ children, ...rest }: LookupButtonProps) {
  return <Button {...rest}></Button>;
}

export default LookupButton;
