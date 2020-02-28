import React from "react";

import { Text } from "rebass";
import BoxListItem from "../../atoms/boxListItem/BoxListItem";
import IndexNumber from "component/atoms/indexNumber/IndexNumber";
import EllipsisText from "component/atoms/ellipsisText/EllipsisText";

import { IRankItem } from "types";

type RankItemProps = {
  rankItem: IRankItem;
  rank: number;
};

function RankItem({ rankItem, rank }: RankItemProps) {
  return (
    <BoxListItem
      css={{
        backgroundColor:
          rank === 1
            ? "rgba(75, 65, 229,0.25)"
            : rank === 2
            ? "rgba(75, 65, 229,0.15)"
            : rank === 3
            ? "rgba(75, 65, 229,0.05)"
            : "#fff"
      }}
    >
      <Text
        sx={{
          float: "left",
          mr: 2,
          fontWeight: rank < 4 ? "bold" : "normal"
        }}
      >
        <IndexNumber
          as="span"
          css={{ fontFamily: "arial,sans-serif", fontStyle: "italic" }}
        >
          {`${rank} `}
        </IndexNumber>
        위
      </Text>
      <EllipsisText
        css={{
          marginRight: "5px"
        }}
      >
        {rankItem.service}
      </EllipsisText>
    </BoxListItem>
  );
}

export default RankItem;
