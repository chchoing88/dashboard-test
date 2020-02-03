import { INaviItem, ITabItem, IFilterButton } from "types";
export const NAVI_INIT_STATE: INaviItem[] = [
  {
    id: "home",
    name: "전체 현황",
    path: "/",
    isActive: true
  },
  {
    id: "analysis",
    name: "사용자분석",
    path: "/analysis",
    isActive: false
  },
  {
    id: "tag",
    name: "카테고리 태그",
    path: "/tag",
    isActive: false
  }
];

export const FILTER_LIST: IFilterButton[] = [
  { id: "adid", name: "adid", isActive: true },
  { id: "aid", name: "aid", isActive: false },
  { id: "account id", name: "account id", isActive: false }
];

export const TAB_OCCUPANCY_LIST: ITabItem[] = [
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

export const TAB_TOP_LIST: ITabItem[] = [
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
