import { INaviItem, ITabItem, IFilterItem, IUfoCategoryIdValue } from "types";
export const NAVI_INIT_STATE: INaviItem[] = [
  {
    id: "home",
    name: "전체 현황",
    path: "/"
  },
  {
    id: "analysis",
    name: "사용자분석",
    path: "/analysis"
  },
  {
    id: "tag",
    name: "카테고리 태그",
    path: "/tag"
  }
];

export const FILTER_LIST: IFilterItem[] = [
  { id: "adid", name: "adid", isActive: true },
  { id: "aid", name: "aid", isActive: false },
  { id: "accountId", name: "account id", isActive: false }
];

export const TAB_OCCUPANCY_LIST: ITabItem<
  Exclude<IUfoCategoryIdValue, "ALL" | "A" | "L">
>[] = [
  {
    id: "I",
    name: "관심사",
    isActive: true
  },
  {
    id: "P",
    name: "업종",
    isActive: false
  },
  {
    id: "C",
    name: "소비",
    isActive: false
  }
];

export const TAB_TOP_LIST: ITabItem<
  Exclude<IUfoCategoryIdValue, "A" | "L">
>[] = [
  {
    id: "ALL",
    name: "전체",
    isActive: true
  },
  {
    id: "I",
    name: "관심사",
    isActive: false
  },
  {
    id: "P",
    name: "업종",
    isActive: false
  },
  {
    id: "C",
    name: "소비",
    isActive: false
  }
];

export const CATEGORY_TAB_LIST: ITabItem<
  Exclude<IUfoCategoryIdValue, "ALL">
>[] = [
  {
    id: "I",
    name: "관심사",
    isActive: true
  },
  {
    id: "P",
    name: "업종",
    isActive: false
  },
  {
    id: "C",
    name: "소비",
    isActive: false
  },
  {
    id: "A",
    name: "활동정보(기획중)",
    isActive: false
  },
  {
    id: "L",
    name: "라이프사이클(기획중)",
    isActive: false
  }
];
