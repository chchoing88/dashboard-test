import React, { memo } from "react";

import FlexRow from "component/atoms/flexRow/FlexRow";
import FlexCol from "component/atoms/flexCol/FlexCol";

import CategoryInfoCard from "component/molecules/categoryInfoCard/CategoryInfoCard";
import { IServiceInfo } from "types";

type CategoryInfoGroupProps = {
  categoryData: IServiceInfo;
};

// col 3 개 중에 어떤게 최고 높이를 가질지 몰라서
// col 3 개 높이를 동일하게 맞춰주기 위해
// Flex 사용.
function CategoryInfoGroup({ categoryData }: CategoryInfoGroupProps) {
  return (
    <FlexRow>
      <FlexCol col={3}>
        <CategoryInfoCard
          title="플친 메세지 수신"
          tooltipId="plusfriend"
          categoryList={categoryData.pfmessage}
        ></CategoryInfoCard>
      </FlexCol>
      <FlexCol col={3}>
        <CategoryInfoCard
          title="카카오 로그인"
          tooltipId="login"
          categoryList={categoryData.loginapi}
        ></CategoryInfoCard>
      </FlexCol>
      <FlexCol col={3}>
        <CategoryInfoCard
          title="검색 카테고리"
          tooltipId="search"
          categoryList={categoryData.searchcategory}
        ></CategoryInfoCard>
      </FlexCol>
    </FlexRow>
  );
}

export default memo(CategoryInfoGroup);
