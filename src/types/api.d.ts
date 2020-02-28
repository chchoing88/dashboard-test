import { IDataCollectionIdValue, IUfoCategoryIdValue } from "./common";
import { Observable } from "rxjs";
import { AjaxResponse, AjaxError } from "rxjs/ajax";

export type IAPISuccess = AjaxResponse | null;
export type IAPIError = AjaxError | null;
export interface IAPIResponse {
  success: IAPISuccess;
  error: IAPIError;
  isLoading: boolean;
}

// overall
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
  usercnt: number;
}

export interface IUFOTagTop {
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

export interface IOverallAPIFetchParameter {
  idType: IDataCollectionIdValue;
}

export interface IOverallAPI {
  fetch: (data: IOverallAPIFetchParameter) => Observable<IAPIResponse>;
}
// tag_occupancy

export interface IOccupancyApiFetchParameter {
  id: IDataCollectionIdValue;
  type: Exclude<IUfoCategoryIdValue, "ALL" | "L" | "A">;
}

export interface IOccupancyItem {
  id: string;
  parent?: string;
  value: number;
  tag_ratio: number;
  partname: string;
  fullname: string;
}

export interface IOccupancyApi {
  fetch: (data: IOccupancyApiFetchParameter) => Observable<IAPIResponse>;
}

// random_user api

export interface IRandomUserResponse {
  profileinfo: IProfileInfo;
  serviceinfo: IServiceInfo;
  consumeinfo: IConsumeInfo;
}

export interface IProfileInfo {
  ufointerest: IProfileItem[];
  ufopoi: IProfileItem[];
  ufoconsume: IProfileItem[];
  userinfo: IUserInfo;
}

export interface IUserInfo {
  adid: string;
  gender: string;
  ageband: string;
  regioninterest: string;
}

export interface IProfileItem {
  score: string;
  tag: string;
}

export interface IRankItem {
  rank: number;
  service: string;
}

export interface IServiceInfo {
  loginapi: IServiceItem[];
  searchcategory: IServiceItem[];
  pfmessage: IServiceItem[];
}

export interface IServiceItem {
  servicecnt: number;
  categoryname: string;
  services: string[];
}

export interface IConsumeInfo {
  totalprice: ITotalPrice;
  counts: ICounts;
  services: IServiceRank[];
}

export interface ITotalPrice {
  value: string;
  percentile: number;
}

export interface ICounts {
  value: number;
  percentile: number;
}

export interface IServiceRank {
  rank: number;
  service: string;
}

export interface IRandomUserApi {
  fetch: () => Observable<IAPIResponse>;
}

// tag_tree

export type ITagTreeResponse = ITagTreeItem[];

export interface ITagTreeItem {
  fullname: string;
  id: string;
  name: string;
  parent?: string;
}

export interface ITagTreeApiFetchParameter {
  type: Exclude<IUfoCategoryIdValue, "ALL">;
}

export interface ITagTreeApi {
  fetch: (data: ITagTreeApiFetchParameter) => Observable<IAPIResponse>;
}

// modificationTimeApi

export interface IModificationTimeResponse {
  start_date: string;
  end_date: string;
}

export interface IModificationTimeApi {
  fetch: () => Observable<IAPIResponse>;
}
