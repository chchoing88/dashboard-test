import React from "react";
import { Box } from "rebass";
import FilterTitle from "component/atoms/filterTitle/FilterTitle";
import FilterButtonGroup from "component/molecules/filterButtonGroup/FilterButtonGroup";

import { IFilterItem, FilterClickHandler } from "types";
import ClearBox from "component/atoms/clearBox/ClearBox";

type FilterSectionProps = {
  title: string;
  filterButtonList: IFilterItem[];
  onClick: FilterClickHandler;
};

function FilterSection({
  title,
  filterButtonList,
  onClick
}: FilterSectionProps) {
  return (
    <ClearBox>
      <Box
        css={{
          marginTop: "10px",
          float: "left",
          width: "70px"
        }}
      >
        <FilterTitle title={title}></FilterTitle>
      </Box>
      <Box css={{ padding: "5px 0" }}>
        <FilterButtonGroup
          filterButtonList={filterButtonList}
          onClick={onClick}
        ></FilterButtonGroup>
      </Box>
    </ClearBox>
  );
}

export default FilterSection;
