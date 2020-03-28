import React from "react";
import { Box, Link } from "rebass";
import { InputProps as InputRebassProps } from "@rebass/forms";

import Input from "component/atoms/input/Input";
import Icon from "component/atoms/icon/Icon";

type LoginInputProps = {
  onDelete: (e: React.MouseEvent) => void;
} & InputRebassProps &
  typeof defaultProps;

const defaultProps = {
  isTyping: false
};

const LoginInput = React.forwardRef<HTMLInputElement, LoginInputProps>(
  (
    { isTyping, onDelete, css, ...rest }: LoginInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <Box
        sx={{
          position: "relative"
        }}
        css={css}
      >
        <Input
          {...rest}
          ref={ref}
          css={{
            padding: "0 50px 0 18px",
            border: "1px solid rgba(0,0,0,.15)",
            borderRadius: "4px",
            width: "100%",
            height: "54px",
            backgroundColor: isTyping ? "#fffbde" : "clean"
          }}
        ></Input>
        {isTyping && (
          <Link
            href="#none"
            onClick={onDelete}
            css={{
              position: "absolute",
              right: "0",
              top: "0",
              padding: "19px 19px 18px 13px",
              "&:hover > div": {
                backgroundPosition: "-20px -20px"
              }
            }}
          >
            <Icon icon="circleDel"></Icon>
          </Link>
        )}
      </Box>
    );
  }
);

LoginInput.defaultProps = defaultProps;

export default LoginInput;
