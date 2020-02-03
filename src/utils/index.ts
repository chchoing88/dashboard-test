import { IActiveBehavior } from "types";

export const comma = (count: number): string =>
  count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const setActiveByID = <T, R extends IActiveBehavior<T>>(id: T) => (
  targetList: R[]
) => {
  if (targetList.some(targetData => targetData.id === id)) {
    return targetList.map(targetData => {
      targetData.isActive = targetData.id === id;
      return targetData;
    });
  }
  return targetList;
};
