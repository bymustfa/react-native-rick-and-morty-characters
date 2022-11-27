import { Text as T } from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import {
  compose,
  color,
  size,
  typography,
  space,
  border,
  flexbox,
  // @ts-ignore
} from "styled-system";

const Text = styled(T)(
  compose(typography, space, color, size, border, flexbox)
);

export default Text;
