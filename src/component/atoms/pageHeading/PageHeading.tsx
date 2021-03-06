import React from "react";
import { Heading, HeadingProps } from "rebass";

type PageHeadingProps = HeadingProps & {
  children: React.ReactNode;
};

function PageHeading({ children, ...rest }: PageHeadingProps) {
  return (
    <Heading
      variant="secondaryHeading"
      sx={{
        display: "inline-block",
        pr: "2"
      }}
      {...rest}
    >
      {children}
    </Heading>
  );
}

export default PageHeading;
