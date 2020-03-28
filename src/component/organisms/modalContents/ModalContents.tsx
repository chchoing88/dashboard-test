import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import SessionExpireModal from "./SessionExpireModal";

import { ModalType } from "types";

type ModalContentsProps = {
  type: ModalType;
} & RouteComponentProps;

const MODAL_CONTENTS_TYPE: { [key in ModalType]: React.Factory<any> | null } = {
  SESSION_EXPIRE: SessionExpireModal,
  DEFAULT: null
};

function ModalContents({ type, ...rest }: ModalContentsProps) {
  const Contents = MODAL_CONTENTS_TYPE[type];
  if (Contents) return <Contents {...rest}></Contents>;
  return null;
  // return Contents
}

export default withRouter(ModalContents);
