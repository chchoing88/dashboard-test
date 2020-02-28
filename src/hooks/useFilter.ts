import { useState, useCallback, useMemo } from "react";
import { setActiveByID } from "utils";

import { IFilterItem, IDataCollectionIdValue } from "types";

function useFilter(filterData: IFilterItem[]) {
  // setFilterList 를 호출하면 다시 그려지길 원한다. 즉, filterList가 변경이 되면 다시 그려지길 원한다.
  const [filterList, setFilterList] = useState<IFilterItem[]>(filterData);

  //computed - 파생
  const currentFilterData = useMemo(() => {
    const activeIndex = filterList.findIndex(filterData => filterData.isActive);
    return filterList[activeIndex];
  }, [filterList]);

  // 메서드 - filter click 시 filterList 변경
  const onClickFilterHandler = useCallback(
    (filterId: IDataCollectionIdValue): void => {
      if (currentFilterData.id !== filterId) {
        // async call
        setFilterList(
          setActiveByID<IFilterItem, IDataCollectionIdValue>(filterId) // filterList isActive 변경
        );
      }
    },
    [currentFilterData]
  );

  return {
    filterList,
    onClickFilterHandler,
    currentFilterData
  };
}

export default useFilter;
