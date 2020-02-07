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

interface LooseObject {
  [key: string]: any;
}

export const convertCommaValueOfObject = <T extends LooseObject>(obj: T) => {
  const test: LooseObject = {};
  Object.keys(obj).reduce((result, key) => {
    //result[key] = "ddd";

    result[key] = obj[key];

    return result;
  }, test);

  return test as T;
};
