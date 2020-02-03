import React from "react";
import { Text } from "rebass";

import RowGrid from "component/atoms/rowGrid/RowGrid";
import ColGrid from "component/atoms/colGrid/ColGrid";
import Boundary from "component/atoms/boundary/Boundary";

type StatusSubListType = {
  [key: string]: string;
};

type StatusSubListProps = {
  subList: StatusSubListType[];
};

function StatusSubList({ subList }: StatusSubListProps) {
  return (
    <RowGrid css={{ margin: 0, borderTop: "1px solid rgba(0,0,0,.1)" }}>
      {subList.map((subItem, index) => (
        <ColGrid
          css={{
            width: "33.33%",
            padding: "15px 0 15px 24px"
          }}
        >
          <Text sx={{ fontSize: 0 }}>관심사</Text>
          <Text>29,301,944</Text>
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
