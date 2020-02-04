import React from "react";

import Dl from "component/atoms/dl/Dl";
import Dt from "component/atoms/dt/Dt";
import Dd from "component/atoms/dd/Dd";
import FilterTitle from "component/atoms/filterTitle/FilterTitle";
import FilterButtonGroup from "component/molecules/filterButtonGroup/FilterButtonGroup";

import { IFilterItem, FilterClickHandler } from "types";

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
    <Dl>
      <Dt
        css={{
          marginTop: "5px"
        }}
      >
        <FilterTitle title={title}></FilterTitle>
      </Dt>
      <Dd>
        <FilterButtonGroup
          filterButtonList={filterButtonList}
          onClick={onClick}
        ></FilterButtonGroup>
      </Dd>
    </Dl>
  );
}

export default FilterSection;
