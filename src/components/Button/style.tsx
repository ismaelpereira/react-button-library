import styled, { css } from "styled-components";
import { ButtonProps } from "./button";

export const ButtonStyle = styled.button<ButtonProps>`
  border: none;
  font-family: "Inter", "Open sans", sans-serif;
  width: 311px;
  height: 56px;
  cursor: pointer;
  ${(props) =>
    props.color &&
    css`
      background-color: #026c00;
      color: white;
      &:hover {
        background-color: #079504;
      }
      &:disabled {
        background-color: #b7d0b6;
      }
      &:active {
        background-color: #013c00;
      }
    `}
  ${(props) =>
    props.color === "secondary" &&
    css`
      background-color: #f7c346;
      color: black;
      &:hover {
        background-color: #ffdf77;
      }
      &:disabled {
        background-color: #ffe58d;
        color: white;
      }
      &:active {
        background-color: #dcac0d;
      }
    `}
`;

export const TextContainer = styled.div`
  margin: 1em;
`;

export const Icon = styled.span`
  margin-left: 8px;
`;
