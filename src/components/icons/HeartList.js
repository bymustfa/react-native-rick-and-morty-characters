import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHeartList = (props) => (
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
      d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
      stroke="#ADACAC"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.152 7.884a2.89 2.89 0 0 0-.94-.654 2.793 2.793 0 0 0-2.215 0c-.351.151-.67.374-.94.654l-.557.581-.558-.58A2.837 2.837 0 0 0 13.895 7c-.768 0-1.504.318-2.047.884A3.083 3.083 0 0 0 11 10.018c0 .8.305 1.567.848 2.133l.558.582L16.5 17l4.094-4.267.558-.582c.269-.28.482-.612.628-.979a3.129 3.129 0 0 0 0-2.31 3.03 3.03 0 0 0-.628-.978v0Z"
      fill="#DA3030"
      stroke="#DA3030"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgHeartList;
