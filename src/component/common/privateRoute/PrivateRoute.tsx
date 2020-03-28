import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { useAuthState } from "contexts/AuthContext";

type PrivateRouteProps = {
  // isLoginCheck: boolean;
} & RouteProps;

function PrivateRoute({
  component: Component,
  // isLoginCheck,
  render,
  ...rest
}: PrivateRouteProps) {
  const { isAuthenticated } = useAuthState();
  return (
    <Route
      {...rest}
      render={({ ...rest }) => {
        if (isAuthenticated) {
          return render
            ? render({ ...rest })
            : Component && <Component {...rest}></Component>;
        }

        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: rest.location }
            }}
          ></Redirect>
        );
      }}
    />
  );
}

export default PrivateRoute;
