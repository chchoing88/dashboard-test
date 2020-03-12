import {
  IActiveBehavior,
  IDataCollectionIdValue,
  IUfoCategoryEnName,
  IUfoCategoryEnNameValue
} from "./common";
export * from "./common";
export * from "./api";

export interface IFilterItem extends IActiveBehavior<IDataCollectionIdValue> {
  name: string;
  isDisable: boolean;
}

export type FilterClickHandler = (id: IDataCollectionIdValue) => void;

export interface ITabItem<T> extends IActiveBehavior<T> {
  name: string;
  isNew?: boolean;
}

export type ButtonClickHandler = (
  e: React.MouseEvent<HTMLButtonElement>
) => void;

export type TagTopType = Pick<IUfoCategoryEnName, "ALL" | "I" | "P" | "C">;
export type TagTopTypeValue = Exclude<
  IUfoCategoryEnNameValue,
  "lifecycle" | "activeinfo"
>;

export type TabThemeType = "underLine" | "fill";

export interface LooseObject {
  [key: string]: any;
}
