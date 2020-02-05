import { useState, useEffect } from "react";
import * as Rx from "rxjs";

import { switchMap } from "rxjs/operators";
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
      .pipe(switchMap(value => apiObservable$(value)))
      .subscribe(setState);

    return () => sub.unsubscribe();
  }, [$triggerObservable, apiObservable$]);

  return state;
}

// 종료 시점, pipe,
export default useApiObservable;
