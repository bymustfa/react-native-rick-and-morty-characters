import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChevronsRight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className=""
    {...props}
  >
    <Path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
  </Svg>
);
export default SvgChevronsRight;
