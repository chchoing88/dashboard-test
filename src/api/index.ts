import { Observable, iif, of } from "rxjs";
import { ajax, AjaxRequest, AjaxResponse, AjaxError } from "rxjs/ajax";
import { mergeMap } from "rxjs/operators";

import {
  IOverallAPI,
  IOccupancyApi,
  IRandomUserApi,
  IAPIResponse,
  ITagTreeApi,
  IModificationTimeApi,
  IAuthApi
} from "../types";
import { catchError } from "rxjs/operators";

const DOMAIN =
  process.env.REACT_APP_DEV === "development"
    ? `//ufo-dashboard-api.dev.devel.kakao.com/api/v1`
    : `//ufo-api.devel.kakao.com/api/v1`;

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

const request = ({
  url,
  method,
  body
}: AjaxRequest): Observable<IAPIResponse> => {
  return ajax({ url, method, body, timeout: 5000, withCredentials: true }).pipe(
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

export const AuthAPi: IAuthApi = {
  login($elemForm) {
    const formData = new FormData($elemForm);
    formData.set("isKeep", formData.has("isKeep") ? "true" : "false");
    return request({
      url: `${DOMAIN}/login`,
      method: "POST",
      body: formData
    });
  },
  check() {
    return request({
      url: `${DOMAIN}/login/check`,
      method: "GET"
    });
  },
  logout() {
    return request({
      url: `${DOMAIN}/logout`,
      method: "GET"
    });
  }
};
