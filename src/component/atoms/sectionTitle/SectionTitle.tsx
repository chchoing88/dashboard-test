import React from "react";
import { Heading, HeadingProps } from "rebass";

type SectionTitleProps = HeadingProps & {
  children: React.ReactNode;
};

function SectionTitle({ children, ...rest }: SectionTitleProps) {
  return (
    <Heading
      as="h3"
      variant="sectionHeading"
      sx={{
        mr: 3
      }}
      {...rest}
    >
      {children}
    </Heading>
  );
}

export default SectionTitle;
