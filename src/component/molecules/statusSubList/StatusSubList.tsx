import React from "react";
import { Text } from "rebass";

import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";
import Boundary from "component/atoms/boundary/Boundary";

type StatusSubItem = {
  title: string;
  figure: string | number;
};

type StatusSubListProps = {
  subList: StatusSubItem[];
};

function StatusSubList({ subList }: StatusSubListProps) {
  return (
    <RowGrid css={{ margin: 0, borderTop: "1px solid rgba(0,0,0,.1)" }}>
      {subList.map((subItem, index) => (
        <ColGrid
          key={subItem.title}
          css={{
            width: "33.33%",
            padding: "15px 0 15px 24px"
          }}
        >
          <Text sx={{ fontSize: 0 }}>{subItem.title}</Text>
          <Text>{subItem.figure}</Text>
          {index !== 0 && (
            <Boundary
              css={{
                top: "25px"
              }}
            />
          )}
        </ColGrid>
      ))}
    </RowGrid>
  );
}

StatusSubList.defaultProps = {
  subList: []
};

export default StatusSubList;
