import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgChevronRight = (props: SvgProps) => (
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
    <Path d="m9 18 6-6-6-6" />
  </Svg>
);
export default SvgChevronRight;
