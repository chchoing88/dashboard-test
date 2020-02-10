import React from "react";

interface ErrorBoundaryProps {
  isError: boolean;
  errorComponent: React.ReactElement;
  children:
    | (React.ReactElement | string)[]
    | React.ReactElement
    | string
    | null;
}

function ErrorBoundary({
  isError,
  errorComponent,
  children,
  ...rest
}: ErrorBoundaryProps) {
  if (isError) {
    return errorComponent;
  }

  return <>{children}</>;
}

export default ErrorBoundary;
