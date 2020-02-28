import React, { memo } from "react";

import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";
import ProfileCard from "component/molecules/profileCard/ProfileCard";

import { IProfileInfo } from "types";

// const TEST_LIST = [
//   { score: "0.999", tag: "게임-게임장르-시뮬레이션" },
//   { score: "0.997", tag: "도서/만화/애니-책-소설" },
//   { score: "0.99", tag: "가정/생활-마일리지/리워드" },
//   { score: "0.986", tag: "여가/일상-킬링타임-음악듣기" },
//   { score: "0.986", tag: "뷰티" },
//   { score: "0.98", tag: "패션-패션잡화-패션용품/액세서리" },
//   { score: "0.98", tag: "영화" },
//   { score: "0.97", tag: "패션-의류-여성의류" },
//   { score: "0.965", tag: "도서/만화/애니-애니메이션" },
//   { score: "0.962", tag: "게임" }
// ];

type ProfileGroup = {
  profileData: IProfileInfo;
};

function ProfileGroup({ profileData }: ProfileGroup) {
  return (
    <RowGrid>
      <ColGrid col={3}>
        <ProfileCard
          title="관심사 태그"
          profileList={profileData.ufointerest}
        ></ProfileCard>
      </ColGrid>
      <ColGrid col={3}>
        <ProfileCard
          title="사용업종 태그"
          profileList={profileData.ufopoi}
        ></ProfileCard>
      </ColGrid>
      <ColGrid col={3}>
        <ProfileCard
          title="소비 태그"
          profileList={profileData.ufoconsume}
        ></ProfileCard>
      </ColGrid>
    </RowGrid>
  );
}

export default memo(ProfileGroup);
