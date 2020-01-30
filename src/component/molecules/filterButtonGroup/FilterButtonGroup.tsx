import React from "react";
import FilterButton from "component/atoms/filterButton/FilterButton";
import { IFilterButton } from "@types";

type FilterButtonGroupProps = {
  filterButtonList: IFilterButton[];
};

function FilterButtonGroup({ filterButtonList }: FilterButtonGroupProps) {
  return (
    <>
      {filterButtonList.map(buttonItem => (
        <FilterButton buttonItem={buttonItem} onClick={() => {}} />
      ))}
    </>
  );
}

FilterButtonGroup.defaultProps = {
  filterButtonList: []
};

export default FilterButtonGroup;
