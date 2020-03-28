import React from "react";
import {
  NavLink,
  NavLinkProps,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import { AuthAPi } from "api";
import { useModalDispatch } from "contexts/ModalContext";
// import { useAuthDispatch } from "contexts/AuthContext";

import { CheckResponse } from "types";

type AuthLinkProps = {
  children: React.ReactNode;
} & NavLinkProps &
  RouteComponentProps;

function AuthLink({
  children,
  history,
  to,
  staticContext,
  ...rest
}: AuthLinkProps) {
  const modalDispatch = useModalDispatch();
  // const authDispatch = useAuthDispatch();

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();

    AuthAPi.check().subscribe(result => {
      const checkSuccess = result.success;
      const responseStatus = checkSuccess?.response as
        | CheckResponse
        | undefined;
      const isLoginSession = responseStatus || { valid: false };
      if (isLoginSession.valid) {
        return history.push(to as string);
      }
      // Todo: result.error가 나왔을 시에도 어떤 처리를 해놔야..
      modalDispatch({ type: "OPEN", modalType: "SESSION_EXPIRE" });
      // authDispatch({ type: "LOGOUT" });
    });
  };

  return (
    <NavLink to={to} {...rest} onClick={onClick}>
      {children}
    </NavLink>
  );
}

export default withRouter(AuthLink);
