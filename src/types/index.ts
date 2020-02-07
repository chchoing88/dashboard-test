import * as Rx from "rxjs";
import { AjaxResponse, AjaxError } from "rxjs/ajax";

export interface IActiveBehavior<T> {
  isActive: boolean;
  id: T;
}

export interface INaviName {
  HOME: "home";
  ANALYSIS: "analysis";
  TAG: "tag";
}

export interface INaviItem {
  id: Readonly<INaviName>[keyof INaviName];
  name: string;
  path: string;
  isActive: boolean;
}

export type NaviClickHandler = (id: INaviName[keyof INaviName]) => void;
export type NaviHooks = [INaviItem[], NaviClickHandler];

export interface IUfoCategoryId {
  ALL: "ALL";
  INTEREST: "I";
  BUSINESS: "P";
  CONSUMPTION: "C"; // Todo: 확인.
}

export interface IUfoCategoryName {
  ALL: "전체";
  INTEREST: "관심사";
  BUSINESS: "업종";
  CONSUMPTION: "소비"; // Todo: 확인.
}

export interface IDataCollectionId {
  ADID: "adid";
  AID: "aid";
  ACCOUNTID: "accountId";
}

export interface IDataCollectionName {
  ADID: "adid";
  AID: "aid";
  ACCOUNTID: "account id";
}

export interface IFilterItem
  extends IActiveBehavior<
    Readonly<IDataCollectionId>[keyof IDataCollectionId]
  > {
  name: Readonly<IDataCollectionName>[keyof IDataCollectionName];
}

export type FilterClickHandler = (
  id: Readonly<IDataCollectionId>[keyof IDataCollectionId]
) => void;

export type FilterHooks = {
  filterList: IFilterItem[];
  onClickFilterHandler: FilterClickHandler;
  currentFilterData$: Rx.Observable<IFilterItem>;
};

export interface ITabId extends IUfoCategoryId {}

export interface ITabName extends IUfoCategoryName {}

export interface ITabItem
  extends IActiveBehavior<Readonly<ITabId>[keyof ITabId]> {
  name: Readonly<ITabName>[keyof ITabName];
}
export type TabClickHandler = (id: Readonly<ITabId>[keyof ITabId]) => void;
export type TabHooks = {
  currentTabData: ITabItem;
  tabList: ITabItem[];
  onHandleTabClick: TabClickHandler;
};

export type IAPISuccess = AjaxResponse | null;
export type IAPIError = AjaxError | null;
export interface IAPIResponse {
  success: IAPISuccess;
  error: IAPIError;
  isLoading: boolean;
}

export interface IUFOStatus {
  overall: string | number;
  interest: string | number;
  poi: string | number;
  consume: string | number;
}

export interface IUFOStatusGroup {
  userCnt: IUFOStatus;
  totalTags: IUFOStatus;
  avgTagsByUser: IUFOStatus;
}

export interface IUFOTag {
  tag: string;
  userCnt: number;
}

interface IUFOTagTop {
  overall: IUFOTag[];
  interest: IUFOTag[];
  poi: IUFOTag[];
  consume: IUFOTag[];
}

export interface IOverallAPIResponse {
  users: IUFOStatusGroup;
  tags: {
    tagTop20: IUFOTagTop;
  };
}
