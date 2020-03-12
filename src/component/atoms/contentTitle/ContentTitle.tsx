import React from "react";

import { Heading, HeadingProps } from "rebass";

type ContentTitleProps = HeadingProps & {};

function ContentTitle({ children, ...rest }: ContentTitleProps) {
  return (
    <Heading
      as="h4"
      variant="contentHeading"
      sx={{
        mr: 3,
        py: 3
      }}
      {...rest}
    >
      {children}
    </Heading>
  );
}

export default ContentTitle;
