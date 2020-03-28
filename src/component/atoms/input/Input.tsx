import React from "react";
import {
  Input as InputRebass,
  InputProps as InputRebassProps
} from "@rebass/forms";

type InputProps = {} & InputRebassProps;

function Input({ ...rest }: InputProps, ref: React.Ref<HTMLInputElement>) {
  return (
    <InputRebass
      ref={ref}
      sx={{ backgroundColor: "clean", outline: "none" }}
      {...rest}
    ></InputRebass>
  );
}

export default React.forwardRef(Input);
