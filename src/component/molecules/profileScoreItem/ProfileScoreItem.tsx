import React from "react";

import { Text } from "rebass";
import BoxListItem from "component/atoms/boxListItem/BoxListItem";
import IndexNumber from "component/atoms/indexNumber/IndexNumber";
import EllipsisText from "component/atoms/ellipsisText/EllipsisText";

import { IProfileItem } from "types";

type ProfileScoreItemProps = {
  profileItem: IProfileItem;
  index: number;
};

function ProfileScoreItem({ profileItem, index }: ProfileScoreItemProps) {
  return (
    <BoxListItem
      css={{
        backgroundColor:
          index === 1
            ? "rgba(73, 122, 220,0.25)"
            : index === 2
            ? "rgba(73, 122, 220,0.15)"
            : index === 3
            ? "rgba(73, 122, 220,0.05)"
            : "#fff"
      }}
    >
      <IndexNumber
        css={{
          float: "left",
          marginRight: "8px",
          fontWeight: index < 4 ? "bold" : "normal"
        }}
      >
        {`${index}.`}
      </IndexNumber>
      <Text sx={{ float: "right", color: "content" }}>
        {parseFloat(profileItem.score).toFixed(3)}
      </Text>
      <EllipsisText
        css={{
          marginRight: "5px"
        }}
      >
        {profileItem.tag}
      </EllipsisText>
    </BoxListItem>
  );
}

export default ProfileScoreItem;
