import React from "react";
import FilterButton from "component/atoms/filterButton/FilterButton";
import { IFilterItem, FilterClickHandler } from "types";

type FilterButtonGroupProps = {
  filterButtonList: IFilterItem[];
  onClick: FilterClickHandler;
};

function FilterButtonGroup({
  filterButtonList,
  onClick
}: FilterButtonGroupProps) {
  return (
    <>
      {filterButtonList.map(buttonItem => (
        <FilterButton
          key={buttonItem.id}
          buttonItem={buttonItem}
          onClick={e => onClick(buttonItem.id)}
        />
      ))}
    </>
  );
}

FilterButtonGroup.defaultProps = {
  filterButtonList: []
};

export default FilterButtonGroup;
