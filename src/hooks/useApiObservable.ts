import { useState, useEffect, useRef } from "react";
import { Observable, Subject } from "rxjs";

import { switchMap, tap, filter } from "rxjs/operators";
import { IAPIResponse } from "types";

function useApiObservable<T>(
  api$: (value: T) => Observable<IAPIResponse>,
  isSetLoading: boolean = true
): [IAPIResponse, Subject<T>] {
  const [state, setState] = useState<IAPIResponse>({
    success: null,
    error: null,
    isLoading: false
  });

  const { current: subject$ } = useRef(new Subject<T>());
  useEffect(() => {
    const sub = subject$
      .pipe(
        filter(triggerData => triggerData !== null),
        tap(
          _ =>
            isSetLoading &&
            setState(beforeState => ({
              success: beforeState.success,
              error: null,
              isLoading: true
            }))
        ),
        switchMap(value => api$(value))
      )
      .subscribe(setState);

    return () => sub.unsubscribe();
  }, [subject$, api$, isSetLoading]);

  // return { ...state, subject$ };
  return [state, subject$];
}

// 종료 시점, pipe,
export default useApiObservable;
