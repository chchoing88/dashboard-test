import { IActiveBehavior, LooseObject, IOccupancyItem } from "types";

export const comma = (count: number): string =>
  count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const setActiveByID = <T extends IActiveBehavior<R>, R>(id: R) => (
  targetList: T[]
) => {
  if (targetList.some(targetData => targetData.id === id)) {
    return targetList.map(targetData => {
      targetData.isActive = targetData.id === id;
      return targetData;
    });
  }
  return targetList;
};

export const convertCommaValueOfObject = <T extends LooseObject>(
  obj: T | undefined
) => {
  const result: LooseObject = {};
  if (!obj) {
    return null;
  }
  Object.keys(obj).reduce((acc, key) => {
    acc[key] = comma(obj[key]);
    return acc;
  }, result);

  return result as { [key in keyof T]: string };
};

export const convertToFixValueOfObject = <T extends LooseObject>(
  obj: T | undefined
) => {
  const result: LooseObject = {};
  if (!obj) {
    return null;
  }
  Object.keys(obj).reduce((acc, key) => {
    const objValue = obj[key];
    acc[key] = objValue === 0 ? objValue.toFixed(0) : objValue.toFixed(2);

    return acc;
  }, result);

  return result as { [key in keyof T]: string };
};

export const zeroValueToDash = (value: string) => {
  if (value === "0") {
    return "-";
  }

  return value;
};

export const sortSunburstList = (
  dataList: IOccupancyItem[]
): IOccupancyItem[] => {
  return dataList.sort((a, b) => {
    if (a.id === "UFO" || b.id === "UFO") {
      return 0;
    }

    if (a.parent === "UFO" && b.parent === "UFO") {
      return 0;
    }

    if (a.parent === "UFO" && b.parent !== "UFO") {
      return -1;
    }

    if (a.parent !== "UFO" && b.parent === "UFO") {
      return 1;
    }

    return 0;
  });
};

export const normalY = (
  x: number,
  mean: number,
  stdDev: number,
  height: number,
  minHeight: number
) => Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2)) * height + minHeight;

// 평균
export const getMean = (lowerBound: number, upperBound: number) =>
  (upperBound + lowerBound) / 2;

// distance between mean and each bound of a 95% confidence interval
// is 2 stdDeviation, so distance between the bounds is 4
// 100 mid => 50% 표준편차 => 50, 150 사이에 95% 가 몰려있다.
export const getStdDeviation = (lowerBound: number, upperBound: number) =>
  (upperBound - lowerBound) / 4;

export const gerneratingXPoint = (barwidth: number, step: number): number[] => {
  const result: number[] = [];
  let tempXPoint = barwidth / 2;

  for (let i = 0; i < step; i++) {
    result.push(tempXPoint);
    tempXPoint = barwidth + tempXPoint;
  }

  return result;
};
