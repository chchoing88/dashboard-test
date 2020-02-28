import React from "react";

import { Box } from "rebass";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import RankItem from "component/molecules/rankItem/RankItem";
import { IRankItem } from "types";

type RankCardProps = {
  rankList: IRankItem[];
};

function RankCard({ rankList }: RankCardProps) {
  return (
    <WidgetCard css={{ backgroundColor: "#F3F3F7" }}>
      <WidgetHeader title="TOP10 결제 서비스"></WidgetHeader>
      <Box sx={{ px: 4, pb: 2, minHeight: "458px" }}>
        {rankList.map((rankItem, index) => (
          <RankItem
            key={rankItem.rank}
            rankItem={rankItem}
            rank={index + 1}
          ></RankItem>
        ))}
      </Box>
    </WidgetCard>
  );
}

export default RankCard;
