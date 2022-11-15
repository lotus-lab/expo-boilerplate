import styled from "styled-components/native";
import {
  color,
  compose,
  layout,
  space,
  typography,
  variant,
  border,
  zIndex,
  position,
} from "styled-system";
import { BoxProps } from "./types";

export const Container = styled.View<BoxProps>`
  ${compose(
    color,
    layout,
    space,
    typography,
    variant,
    border,
    zIndex,
    position
  )};
`;
