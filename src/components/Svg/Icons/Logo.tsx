import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image
        href="data:image/png;base64,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
"
        width="32"
      ></image>
    </Svg>
  );
};

export default Icon;
