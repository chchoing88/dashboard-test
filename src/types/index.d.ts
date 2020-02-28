import {
  IActiveBehavior,
  IDataCollectionIdValue,
  IDataCollectionNameValue
} from "./common";
export * from "./common";
export * from "./api";

export interface IFilterItem extends IActiveBehavior<IDataCollectionIdValue> {
  name: IDataCollectionNameValue;
}

export type FilterClickHandler = (id: IDataCollectionIdValue) => void;

export interface ITabItem<T> extends IActiveBehavior<T> {
  name: string;
}

export type ButtonClickHandler = (
  e: React.MouseEvent<HTMLButtonElement>
) => void;

export interface LooseObject {
  [key: string]: any;
}
