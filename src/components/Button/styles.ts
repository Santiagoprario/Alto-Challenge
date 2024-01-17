import styled from "styled-components";
import { ButtonProps } from ".";

const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #241178;
  color: white;
  cursor: pointer;
  transition: border-color 0.25s;
  margin-top: ${({ marginTop }) => marginTop || ''};

  ${({ disabled }) =>
  (disabled &&
    `
    cursor: not-allowed;
    opacity: 0.3;
  `) ||
  `
  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }
`}
`;

export default { Button };