import React, { useState, useRef } from "react";
import { Box, BoxProps } from "rebass";

import Spinner from "component/atoms/spinner/Spinner";

interface LoadBoundaryProps extends BoxProps {
  isLoading: boolean;
  children:
    | (React.ReactElement | string)[]
    | React.ReactElement
    | string
    | null;
}

const LOADING_THRESHOLD = 100;

function LoadBoundary({ isLoading, children, ...rest }: LoadBoundaryProps) {
  const [startLoading, setStartLoading] = useState(false);
  const timeOutId = useRef<number | null>(null);

  if (isLoading) {
    timeOutId.current = setTimeout(() => {
      setStartLoading(true);
    }, LOADING_THRESHOLD);
  } else {
    if (timeOutId.current) {
      clearTimeout(timeOutId.current);
      timeOutId.current = null;
      startLoading && setStartLoading(false);
    }
  }
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
