import React from "react";

import { Link, LinkProps } from "rebass";
import Icon from "component/atoms/icon/Icon";

interface MenuLinkProps extends LinkProps {
  children: React.ReactNode;
  isOutLink?: boolean;
}

function MenuLink({ children, isOutLink, ...rest }: MenuLinkProps) {
  return (
    <Link
      target={isOutLink ? "_blank" : "_self"}
      rel="noopener noreferrer"
      sx={{
        display: "block",
        fontSize: "13px",
        lineHeight: "13px",
        padding: "6px 14px"
      }}
      {...rest}
    >
      {children}
      {isOutLink && (
        <Icon
          icon="outLink"
          css={{ marginLeft: "8px", marginTop: "1px" }}
        ></Icon>
      )}
    </Link>
  );
}

MenuLink.defaultProps = {
  isOutLink: false
};

export default MenuLink;
