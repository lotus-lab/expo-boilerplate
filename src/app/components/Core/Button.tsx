import { theme } from "src/utils/theme/theme";
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
import { ButtonProps } from "./types";

export const Button = styled.TouchableOpacity<ButtonProps>`
  padding: ${theme.spaces[12]};
  ${compose(
    color,
    layout,
    space,
    typography,
    variant,
    border,
    zIndex,
    position
  )}
`;
