import { Observable, iif, of } from "rxjs";
import { ajax, AjaxRequest, AjaxResponse, AjaxError } from "rxjs/ajax";
import { mergeMap } from "rxjs/operators";

import {
  IOverallAPI,
  IOccupancyApi,
  IRandomUserApi,
  IAPIResponse,
  ITagTreeApi,
  IModificationTimeApi
} from "../types";
import { catchError } from "rxjs/operators";

const DOMAIN =
  process.env.REACT_APP_DEV === "development"
    ? `http://10.195.11.33:28888/api/test`
    : `http://10.195.11.33:18888/api/test`;

const successFn = (success: AjaxResponse): Observable<IAPIResponse> => {
  return of({
    success,
    error: null,
    isLoading: false
  });
};

const errorFn = (error: AjaxError): Observable<IAPIResponse> => {
  return of({
    success: null,
    error,
    isLoading: false
  });
};

const request = ({ url, method }: AjaxRequest): Observable<IAPIResponse> => {
  return ajax({ url, method, timeout: 5000 }).pipe(
    catchError(error => of(error)),
    mergeMap(result =>
      iif(
        () => {
          return result instanceof AjaxResponse;
        },
        successFn(result),
        errorFn(result)
      )
    )
  );
};

export const overallApi: IOverallAPI = {
  fetch({ idType }) {
    return request({
      url: `${DOMAIN}/overall?idtype=${idType}`,
      // url: DOMAIN,
      method: "GET"
    });
  }
};

export const occupancyApi: IOccupancyApi = {
  fetch({ id, type }) {
    return request({
      url: `${DOMAIN}/tag_occupancy?type=${type}&idtype=${id}`,
      method: "GET"
    });
  }
};

export const randomUserApi: IRandomUserApi = {
  fetch() {
    return request({
      url: `${DOMAIN}/random_user`,
      method: "GET"
    });
  }
};

export const categoryTagApi: ITagTreeApi = {
  fetch({ type }) {
    return request({
      url: `${DOMAIN}/tag_tree?type=${type}`,
      method: "GET"
    });
  }
};

export const modificationTimeApi: IModificationTimeApi = {
  fetch() {
    return request({
      url: `${DOMAIN}/modification_time`,
      method: "GET"
    });
  }
};
