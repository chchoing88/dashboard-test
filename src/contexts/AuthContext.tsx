// 상태와 디스패치 전용 context를 분리하자.
// 필요한 상태가...userName, isLoginCheck
// 필요한 액션 setUserName, setLoginCheck

// 액션만 필요한 컴포넌트가 따로 있나??? 있네 ~
import React, {
  createContext,
  Dispatch,
  useReducer,
  useContext,
  useEffect
} from "react";
import { AuthState } from "../types";
import { AuthAPi } from "api";
import useApiObservable from "hooks/useApiObservable";

import { CheckResponse } from "types";

type AuthContextProviderProps = {
  children: React.ReactNode;
};
type Action =
  | {
      type: "LOGIN";
      username: string;
    }
  | { type: "LOGIN_CHECK"; username: string; isAuth: boolean }
  | { type: "LOGOUT" };
type AuthDispatch = Dispatch<Action>;

const AuthStateContext = createContext<AuthState>({
  username: "",
  isAuthenticated: false
});

const AuthDispatchContext = createContext<AuthDispatch | undefined>(undefined);

function AuthReducer(state: AuthState, action: Action): AuthState {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        username: action.username,
        isAuthenticated: true
      };
    case "LOGIN_CHECK":
      return {
        ...state,
        username: action.username,
        isAuthenticated: action.isAuth
      };
    case "LOGOUT":
      return {
        ...state,
        username: "",
        isAuthenticated: false
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [checkState, subject$] = useApiObservable(AuthAPi.check, false);
  useEffect(() => {
    subject$.next();
  }, [subject$]);

  const [authState, dispatch] = useReducer(AuthReducer, {
    username: "",
    isAuthenticated: false
  });

  const loginCheckSuccess = checkState.success;
  const loginCheckError = checkState.error;
  const loginCheckLoading = checkState.isLoading;

  if (!loginCheckSuccess && !loginCheckError && !loginCheckLoading) return null;

  const loginCheckResponse = (loginCheckSuccess?.response || {
    valid: false
  }) as CheckResponse;

  if (loginCheckResponse.valid) {
    // dispatch({ type: "LOGIN_CHECK", username: "merlin.ho", isAuth: true });
    authState.isAuthenticated = true;
    authState.username = loginCheckResponse.name || "";
  }
  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={authState}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
}

export function useAuthState() {
  const state = useContext(AuthStateContext);
  return state;
}

export function useAuthDispatch() {
  const dispatch = useContext(AuthDispatchContext);
  if (!dispatch) throw new Error("AuthDispatchContext value not found");
  return dispatch;
}
