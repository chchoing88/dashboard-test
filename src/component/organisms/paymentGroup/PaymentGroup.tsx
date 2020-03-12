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
      <ColGrid col={8}>
        <PaymentInfoCard
          totalPrice={paymentData.totalprice}
          isNew={true}
          counts={paymentData.counts}
        ></PaymentInfoCard>
      </ColGrid>
      <ColGrid col={4}>
        <RankCard rankList={paymentData.services} isNew={true}></RankCard>
      </ColGrid>
    </RowGrid>
  );
}

export default memo(PaymentGroup);
