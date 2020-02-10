import { IActiveBehavior, LooseObject } from "types";

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

export const convertCommaValueOfObject = <T extends LooseObject>(obj: T) => {
  const result: LooseObject = {};
  if (!obj) {
    return null;
  }
  Object.keys(obj).reduce((acc, key) => {
    acc[key] = comma(obj[key]);

    return acc;
  }, result);

  return result as T;
};

export const convertToFixValueOfObject = <T extends LooseObject>(obj: T) => {
  const result: LooseObject = {};
  if (!obj) {
    return null;
  }
  Object.keys(obj).reduce((acc, key) => {
    acc[key] = obj[key].toFixed(2);

    return acc;
  }, result);

  return result as T;
};
