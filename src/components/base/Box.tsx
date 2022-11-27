import { View } from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import {
  compose,
  color,
  size,
  space,
  border,
  flexbox,
  borderRadius,
  position,
  background,
  display,
  boxShadow,
  // @ts-ignore
} from "styled-system";

const Box = styled(View)(
  compose(
    flexbox,
    space,
    border,
    color,
    size,
    borderRadius,
    position,
    background,
    display,
    boxShadow
  )
);

export default Box;
