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
import { TextProps } from "./types";

export const Text = styled.Text<TextProps>`
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
