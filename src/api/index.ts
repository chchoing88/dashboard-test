import { Observable, iif, of, Subscriber } from "rxjs";
import { ajax, AjaxRequest, AjaxResponse, AjaxError } from "rxjs/ajax";
import { mergeMap } from "rxjs/operators";

import { IActiveBehavior, IDataCollectionId, IAPIResponse } from "../types";
import { catchError } from "rxjs/operators";

// const DOMAIN = "https://ufo-api.devel.kakao.com/api/test";
const DOMAIN = `https://api.github.com/users?per_page=2`;

const successFn = (success: AjaxResponse): Observable<IAPIResponse> =>
  of({
    success,
    error: null
  });

const errorFn = (error: AjaxError): Observable<IAPIResponse> =>
  of({
    success: null,
    error
  });

const request = ({
  url,
  method = "GET"
}: AjaxRequest): Observable<IAPIResponse> => {
  const progressSubscriber = new Subscriber<ProgressEvent>(v =>
    console.log("v", v)
  );
  console.log("progressSubscriber", progressSubscriber);

  return ajax({ url, method, progressSubscriber }).pipe(
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
      // url: `${DOMAIN}/overall?idtype=${id}`
      url: DOMAIN
    });
  }
};
