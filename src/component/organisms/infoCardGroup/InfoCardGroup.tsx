import React, { memo } from "react";

import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";
import InfoCard from "component/molecules/infoCard/InfoCard";

import { IUserInfo } from "types";

type InfoCardGroupProps = {
  useInfoData: IUserInfo;
};

function InfoCardGroup({ useInfoData }: InfoCardGroupProps) {
  return (
    <RowGrid css={{ textAlign: "center" }}>
      <ColGrid col={4}>
        <InfoCard title="성별(추정)" infoText={useInfoData.gender} />
      </ColGrid>
      <ColGrid col={4}>
        <InfoCard title="연령대(추정)" infoText={useInfoData.ageband} />
      </ColGrid>
      <ColGrid col={4}>
        <InfoCard
          title="관심지역(추정)"
          infoText={useInfoData.regioninterest}
        />
      </ColGrid>
    </RowGrid>
  );
}

export default memo(InfoCardGroup);
