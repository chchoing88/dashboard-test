import React from "react";

import { Text } from "rebass";
import SmallText from "component/atoms/smallText/SmallText";
import NewBadge from "component/atoms/newBadge/NewBadge";

type SubUfoStatusProps = {
  figure: string;
  title: string;
} & typeof defaultProps;

const defaultProps = {
  isNew: false
};

function SubUfoStatus({ title, figure, isNew }: SubUfoStatusProps) {
  return (
    <>
      <SmallText
        css={{
          display: "inline-block",
          position: "relative"
        }}
      >
        {title} {isNew && <NewBadge></NewBadge>}
      </SmallText>
      <Text>{figure}</Text>
    </>
  );
}

SubUfoStatus.defaultProps = defaultProps;

export default SubUfoStatus;
