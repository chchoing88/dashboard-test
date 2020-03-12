import React from "react";
import FilterButton from "component/atoms/filterButton/FilterButton";
import { IFilterItem, FilterClickHandler } from "types";

type FilterButtonGroupProps = {
  onClick: FilterClickHandler;
} & typeof defaultProps;

const defaultProps = {
  filterButtonList: [] as IFilterItem[]
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
          name={buttonItem.name}
          isActive={buttonItem.isActive}
          isDisable={buttonItem.isDisable}
          onClick={e => onClick(buttonItem.id)}
        />
      ))}
    </>
  );
}

FilterButtonGroup.defaultProps = defaultProps;

export default FilterButtonGroup;
