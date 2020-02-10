import { useState, useEffect } from "react";
import * as Rx from "rxjs";

import { switchMap, tap } from "rxjs/operators";
import { IAPIResponse } from "types";

function useApiObservable<T>(
  $triggerObservable: Rx.Observable<T>,
  apiObservable$: (value: T) => Rx.Observable<IAPIResponse>
): IAPIResponse {
  const [state, setState] = useState<IAPIResponse>({
    success: null,
    error: null,
    isLoading: false
  });

  useEffect(() => {
    const sub = $triggerObservable
      .pipe(
        tap(_ =>
          setState({
            success: null,
            error: null,
            isLoading: true
          })
        ),
        switchMap(value => apiObservable$(value))
      )
      .subscribe(setState);

    return () => sub.unsubscribe();
  }, [$triggerObservable, apiObservable$]);

  return state;
}

// 종료 시점, pipe,
export default useApiObservable;
