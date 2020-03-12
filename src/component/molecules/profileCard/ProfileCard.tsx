import React from "react";

import { Box } from "rebass";
import WidgetCard from "component/atoms/widgetCard/WidgetCard";
import WidgetHeader from "component/atoms/widgetHeader/WidgetHeader";
import ProfileScoreItem from "component/molecules/profileScoreItem/ProfileScoreItem";

import { IProfileItem } from "types";
// import ClearBox from "component/atoms/clearBox/ClearBox";

type ProfileCardProps = {
  title: string;
} & typeof defaultProps;

const MAX_INDEX = 10;
const MIN_INDEX = 0;
const defaultProps = {
  profileList: [] as IProfileItem[],
  isNew: false
};

function ProfileCard({ title, isNew, profileList }: ProfileCardProps) {
  return (
    <WidgetCard css={{ backgroundColor: "#f3f3f7" }}>
      <WidgetHeader title={title} isNew={isNew}></WidgetHeader>

      <Box sx={{ px: 4, pb: 2 }}>
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

ProfileCard.defaultProps = defaultProps;

export default ProfileCard;
