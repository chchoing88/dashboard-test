import { Observable, iif, of } from "rxjs";
import { ajax, AjaxRequest, AjaxResponse, AjaxError } from "rxjs/ajax";
import { mergeMap } from "rxjs/operators";

import { IActiveBehavior, IDataCollectionId, IAPIResponse } from "../types";
import { catchError } from "rxjs/operators";

// const DOMAIN = "https://ufo-api.devel.kakao.com/api/test";
// const DOMAIN = `https://randomuser.me/api/`;
const DOMAIN = `http://10.195.11.33:28888/api/test`;

const successFn = (success: AjaxResponse): Observable<IAPIResponse> =>
  of({
    success,
    error: null,
    isLoading: false
  });

const errorFn = (error: AjaxError): Observable<IAPIResponse> =>
  of({
    success: null,
    error,
    isLoading: false
  });

const request = ({ url, method }: AjaxRequest): Observable<IAPIResponse> => {
  return ajax({ url, method }).pipe(
    catchError(error => of(error)),
    mergeMap(result =>
      iif(
        () => result instanceof AjaxResponse,
        successFn(result),
        errorFn(result)
      )
    )
  );
};

export const overallApi = {
  fetch({
    id
  }: IActiveBehavior<IDataCollectionId[keyof IDataCollectionId]>): Observable<
    IAPIResponse
  > {
    return request({
      url: `${DOMAIN}/overall?idtype=${id}`,
      // url: DOMAIN,
      method: "GET"
    });
  }
};
