export interface INaviName {
  HOME: "home";
  ANALYSIS: "analysis";
  TAG: "tag";
}

export interface INaviItem {
  id: Readonly<INaviName>[keyof INaviName];
  name: string;
  path: string;
}

export interface IActiveBehavior<T> {
  isActive: boolean;
  id: T;
}

export interface IUfoCategoryId {
  ALL: "ALL";
  INTEREST: "I";
  BUSINESS: "P";
  CONSUMPTION: "C"; // Todo: 확인.
  LIFECYCLE: "L";
  ACTIVEINFO: "A";
}
export type IUfoCategoryIdValue = Readonly<
  IUfoCategoryId
>[keyof IUfoCategoryId];

export interface IUfoCategoryName {
  ALL: "전체";
  INTEREST: "관심사";
  BUSINESS: "서비스 업종";
  CONSUMPTION: "소비"; // Todo: 확인.
  LIFECYCLE: "라이프사이클";
  ACTIVEINFO: "활동정보";
}

export interface IUfoCategoryEnName {
  ALL: "overall";
  I: "interest";
  P: "poi";
  C: "consume";
  L: "lifecycle";
  A: "activeinfo";
}
export type IUfoCategoryEnNameValue = Readonly<
  IUfoCategoryEnName
>[keyof IUfoCategoryEnName];

export interface IDataCollectionId {
  ADID: "adid";
  AID: "aid";
  ACCOUNTID: "accountId";
}
export type IDataCollectionIdValue = Readonly<
  IDataCollectionId
>[keyof IDataCollectionId];

export interface IDataCollectionName {
  ADID: "adid";
  AID: "aid";
  ACCOUNTID: "account id";
}
export type IDataCollectionNameValue = Readonly<
  IDataCollectionName
>[keyof IDataCollectionName];

export type IconType = "menu" | "outLink" | "circleDel";
