import React from "react";
import { useModalDispatch } from "contexts/ModalContext";
import { Box, BoxProps } from "rebass";
import { IAPIError } from "types";

type ErrorBoundaryProps = BoxProps & {
  error: IAPIError;
  errorComponent: React.ReactElement;
  children: React.ReactNode;
};

function ErrorBoundary({
  error,
  errorComponent,
  children,
  ...rest
}: ErrorBoundaryProps) {
  const dispatch = useModalDispatch();
  if (error) {
    if (error.status === 403) {
      dispatch({ type: "OPEN", modalType: "SESSION_EXPIRE" });
    }
    return <Box {...rest}>{errorComponent}</Box>;
  }

  return <>{children}</>;
}

export default ErrorBoundary;
