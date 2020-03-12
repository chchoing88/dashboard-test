import React from "react";
import useLoading from "hooks/useLoading";
import { Box, BoxProps } from "rebass";

import Spinner from "component/atoms/spinner/Spinner";

type LoadBoundaryProps = BoxProps & {
  isLoading: boolean;
  children: React.ReactNode;
};

function LoadBoundary({ isLoading, children, ...rest }: LoadBoundaryProps) {
  const startLoading = useLoading(isLoading);

  if (startLoading) {
    return (
      <Box {...rest}>
        <Spinner></Spinner>
      </Box>
    );
  }

  return <>{children}</>;
}

export default LoadBoundary;
