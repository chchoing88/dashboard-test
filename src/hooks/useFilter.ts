import { useState, useCallback } from "react";

function useFilter(filterData) {
  const [filterList, setFilterList] = useState(filterData);

  const onClickFilterHandler = useCallback(() => {
    // filterList isActive 변경
  }, []);
}

export default useFilter;
