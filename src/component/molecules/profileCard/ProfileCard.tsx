import React from "react";

import { Box } from "rebass";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import ProfileScoreItem from "component/molecules/profileScoreItem/ProfileScoreItem";

import { IProfileItem } from "types";
// import ClearBox from "component/atoms/clearBox/ClearBox";

const MAX_INDEX = 10;
const MIN_INDEX = 0;
type ProfileCardProps = {
  title: string;
  profileList: IProfileItem[];
};

function ProfileCard({ title, profileList }: ProfileCardProps) {
  return (
    <WidgetCard css={{ backgroundColor: "#f3f3f7" }}>
      <WidgetHeader title={title}></WidgetHeader>

      <Box sx={{ px: 4, pb: 2 }}>
        {/* <ClearBox
          css={{
            padding: "8px 10px 4px 7px",
            color: "#8B8B8B",
            fontSize: "12px"
          }}
        >
          <Text sx={{ float: "left" }}>No.</Text>
          <Text sx={{ float: "left", ml: "3px" }}>태그</Text>
          <Text sx={{ float: "right" }}>스코어</Text>
        </ClearBox> */}
        {profileList.slice(MIN_INDEX, MAX_INDEX).map((profileItem, index) => (
          <ProfileScoreItem
            key={profileItem.tag}
            index={index + 1}
            profileItem={profileItem}
          ></ProfileScoreItem>
        ))}
      </Box>
    </WidgetCard>
  );
}

ProfileCard.defaultProps = {
  rankingList: []
};

export default ProfileCard;
