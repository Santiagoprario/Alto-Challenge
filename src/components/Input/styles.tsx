/* eslint-disable react-refresh/only-export-components */
import styled, { css } from "styled-components";
import { InputProps } from ".";

const Input = styled.input<InputProps>`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  ${({ errors }) => !!errors && css`
  border-color: red;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title  =styled.p`
  margin-bottom: 5px;
  font-weight: bold;
`;

const SpanError = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export default { Container, Input, SpanError, Title };
