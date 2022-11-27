import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgStarFull = (props: SvgProps) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="m12 2 2.974 6.906 7.488.695-5.65 4.963 1.654 7.335L12 18.06 5.534 21.9l1.654-7.336L1.538 9.6l7.488-.695L12 2Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgStarFull;
