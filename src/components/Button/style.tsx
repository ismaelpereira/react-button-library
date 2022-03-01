import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedCssFunction,
} from "styled-components";
import { ButtonProps } from "./button";

export const colors: { [key: string]: FlattenSimpleInterpolation } = {
  primary: css`
    background-color: #026c00;
    color: white;
    &:hover {
      background-color: #079504;
    }
    &:disabled {
      background-color: #b7d0b6;
    }
    &:enabled:active {
      background-color: #013c00;
    }
  `,
  secondary: css`
    background-color: #f7c346;
    color: black;
    &:hover {
      background-color: #ffdf77;
    }
    &:disabled {
      background-color: #ffe58d;
      color: white;
    }
    &:enabled:active {
      background-color: #dcac0d;
    }
  `,
};

export const ButtonStyle = styled.button<ButtonProps>`
  border: none;
  font-family: "Inter", "Open sans", sans-serif;
  width: 100%;
  height: 56px;
  cursor: pointer;
  text-align: center;
  ${({ color }) => colors[color]};

  & > div {
    display: flex;
    align-items: center;
    margin: 1em;
    justify-content: space-between;
    ${(props) =>
      props.icon === undefined &&
      css`
        text-align: center;
        justify-content: center;
      `};
  }
`;
