import React from "react";
import { comma } from "utils";

import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import { Box, Text } from "rebass";
import PaymentInfo from "component/molecules/paymentInfo/PaymentInfo";

import { ITotalPrice, ICounts } from "types";

type PaymentInfoCardProps = {
  totalPrice: ITotalPrice;
  counts: ICounts;
};

function PaymentInfoCard({ totalPrice, counts }: PaymentInfoCardProps) {
  return (
    <WidgetCard>
      <WidgetHeader title="결제 금액 / 횟수 정보"></WidgetHeader>
      <Box
        sx={{
          position: "relative",
          px: 4,
          minHeight: "458px"
        }}
      >
        <PaymentInfo
          title="결제 총액"
          value={`${comma(parseFloat(totalPrice.value))} 원`}
          percent={totalPrice.percentile}
        ></PaymentInfo>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(0,0,0,0.1)"
          }}
        ></Box>
        <PaymentInfo
          title="결제 건수"
          value={`${counts.value} 회`}
          percent={counts.percentile}
        ></PaymentInfo>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(0,0,0,0.1)"
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "24px",
            left: "24px",
            color: "content"
          }}
        >
          <Text>상위 1% : 결제가 많은 사용자</Text>
          <Text>상위 99% : 결제가 적은 사용자</Text>
        </Box>
      </Box>
    </WidgetCard>
  );
}

export default PaymentInfoCard;
