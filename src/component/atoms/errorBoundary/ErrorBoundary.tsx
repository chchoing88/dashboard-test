import React from "react";
import { Box, BoxProps } from "rebass";

type ErrorBoundaryProps = BoxProps & {
  isError: boolean;
  errorComponent: React.ReactElement;
  children: React.ReactNode;
};

function ErrorBoundary({
  isError,
  errorComponent,
  children,
  ...rest
}: ErrorBoundaryProps) {
  if (isError) {
    return <Box {...rest}>{errorComponent}</Box>;
  }

  return <>{children}</>;
}

export default ErrorBoundary;
