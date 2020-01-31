import React from "react";
import { Box } from "rebass";
import TabItem from "component/atoms/tabItem/TabItem";

type TabListProps = {
  children: React.ReactElement[];
};

function TabList({ children = [] }: TabListProps) {
  const length: number = children.length || 1;

  return (
    <Box
      as="ul"
      sx={{
        "&:after": {
          display: "block",
          clear: "both",
          content: "''"
        }
      }}
    >
      {children.map(reactTabNode => (
        <TabItem
          key={reactTabNode.props.id}
          css={{
            width: `${100 / length}%`
          }}
        >
          {reactTabNode}
        </TabItem>
      ))}
    </Box>
  );
}

export default TabList;
