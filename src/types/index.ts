export interface INaviName {
  readonly HOME: "home";
  readonly ANALYSIS: "analysis";
  readonly TAG: "tag";
}

export interface INaviItem {
  id: INaviName[keyof INaviName];
  name: string;
  path: string;
  isActive: boolean;
}

export type NaviClickHandler = (id: INaviName[keyof INaviName]) => void;
export type NaviHooks = [INaviItem[], NaviClickHandler];
