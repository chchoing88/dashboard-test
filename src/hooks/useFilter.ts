import { useState, useCallback, useMemo } from "react";
import { of } from "rxjs";
import { setActiveByID } from "utils";

import { IFilterItem, FilterHooks, IDataCollectionId } from "types";

function useFilter(filterData: IFilterItem[]): FilterHooks {
  const [filterList, setFilterList] = useState<IFilterItem[]>(filterData);

  const onClickFilterHandler = useCallback(
    (filterId: IDataCollectionId[keyof IDataCollectionId]): void => {
      // filterList isActive 변경
      setFilterList(
        setActiveByID<IDataCollectionId[keyof IDataCollectionId], IFilterItem>(
          filterId
        )
      );
    },
    []
  );

  // 현재 탭 객체
  const currentFilterData$ = useMemo(() => {
    const activeIndex = filterList.findIndex(filterData => filterData.isActive);
    return of(filterList[activeIndex]);
  }, [filterList]);

  return {
    filterList,
    onClickFilterHandler,
    currentFilterData$
  };
}

export default useFilter;
