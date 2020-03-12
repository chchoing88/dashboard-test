import React from "react";
import { Box, Text } from "rebass";

import ClearBox from "component/atoms/clearBox/ClearBox";
import ConsumeDistributionGraph from "component/molecules/consumeDistributionGraph/ConsumeDistributionGraph";

type PaymentInfoProps = {
  title: string;
  value: string;
  percent: number;
};

function PaymentInfo({ title, value, percent }: PaymentInfoProps) {
  return (
    <ClearBox css={{ position: "relative", padding: "15px 0 10px 0" }}>
      <Text
        as="strong"
        sx={{
          display: "block",
          mb: 2,
          mr: 3
        }}
      >
        {title}
      </Text>
      <Text sx={{ fontSize: 3 }}>{value} </Text>

      <Box sx={{ mt: 2 }}>
        <ConsumeDistributionGraph percent={percent}></ConsumeDistributionGraph>
      </Box>
    </ClearBox>
  );
}

export default PaymentInfo;
