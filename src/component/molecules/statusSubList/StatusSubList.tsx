import React from "react";
import { Text } from "rebass";
import TabUl from "component/atoms/tabUl/TabUl";
import TabLi from "component/atoms/tabLi/TabLi";
import TabBoundary from "component/atoms/tabBoundary/TabBoundary";

type StatusSubListType = {
  [key: string]: string;
};

type StatusSubListProps = {
  subList: StatusSubListType[];
};

function StatusSubList({ subList }: StatusSubListProps) {
  return (
    <TabUl css={{ borderTop: "1px solid rgba(0,0,0,.1)" }}>
      {subList.map((subItem, index) => (
        <TabLi
          css={{
            width: "33.33%",
            padding: "15px 0 15px 24px"
          }}
        >
          <Text sx={{ fontSize: 0 }}>관심사</Text>
          <Text>29,301,944</Text>
          {index !== 0 && <TabBoundary />}
        </TabLi>
      ))}
    </TabUl>
  );
}

StatusSubList.defaultProps = {
  subList: []
};

export default StatusSubList;
