/* eslint-disable no-unused-vars */
import React, { FunctionComponent } from 'react';
import Styled from './styles';

export interface InputProps {
	name?: string;
	title?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
  value?: string;
	id?: string;
	type?: string;
	placeholder?: string;
  errors?: string;
}


const Input: FunctionComponent<InputProps> = ({
	name,
	onChange,
	onFocus,
	onBlur,
	title,
	disabled = false,
	type = 'text',
	placeholder,
  value,
  errors,
	id,
}) => {
	return (
    <Styled.Container>  
      <Styled.Title>{title}</Styled.Title>
      <Styled.Input
        id={id}
        key={name}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      />
      {errors && <Styled.SpanError>{errors}</Styled.SpanError>}
    </Styled.Container>  
	);
};

export default Input;
