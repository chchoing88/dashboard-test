import React, { memo } from "react";

import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";

import PaymentInfoCard from "component/molecules/paymentInfoCard/PaymentInfoCard";
import RankCard from "component/molecules/rankCard/RankCard";

import { IConsumeInfo } from "types";

type PaymentGroupProps = {
  paymentData: IConsumeInfo;
};

function PaymentGroup({ paymentData }: PaymentGroupProps) {
  return (
    <RowGrid>
      <ColGrid col={3}>
        <PaymentInfoCard
          totalPrice={paymentData.totalprice}
          counts={paymentData.counts}
        ></PaymentInfoCard>
      </ColGrid>
      <ColGrid col={3}>
        <RankCard rankList={paymentData.services}></RankCard>
      </ColGrid>
    </RowGrid>
  );
}

export default memo(PaymentGroup);
