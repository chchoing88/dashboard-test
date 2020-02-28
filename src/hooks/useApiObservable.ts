import { useState, useEffect, useRef } from "react";
import { Observable, Subject } from "rxjs";

import { switchMap, tap, filter } from "rxjs/operators";
import { IAPIResponse } from "types";

function useApiObservable<T>(
  api$: (value: T) => Observable<IAPIResponse>
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
        tap(_ =>
          setState(beforeState => ({
            success: beforeState.success,
            error: beforeState.error,
            isLoading: true
          }))
        ),
        switchMap(value => api$(value))
      )
      .subscribe(setState);

    return () => sub.unsubscribe();
  }, [subject$, api$]);

  // return { ...state, subject$ };
  return [state, subject$];
}

// 종료 시점, pipe,
export default useApiObservable;
