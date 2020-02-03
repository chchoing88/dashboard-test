import React from "react";
import FilterButton from "component/atoms/filterButton/FilterButton";
import { IFilterButton } from "types";

type FilterButtonGroupProps = {
  filterButtonList: IFilterButton[];
  onClick: () => void;
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
          onClick={onClick}
        />
      ))}
    </>
  );
}

FilterButtonGroup.defaultProps = {
  filterButtonList: []
};

export default FilterButtonGroup;
