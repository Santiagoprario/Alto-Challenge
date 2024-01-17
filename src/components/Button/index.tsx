/* eslint-disable no-unused-vars */
import React from 'react';
import Styled from './styles';

export interface ButtonProps {
	id?: string;
	children: string;
	type?: 'submit' | 'button';
	color?: string;
	className?: string;
	disabled?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	marginTop?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
	children,
	onClick,
	disabled = false,
	id,
  className,
	marginTop,
	type = 'button',
	...rest
}: ButtonProps) => {

	return (
		<Styled.Button
			onClick={onClick}
			type={type}
			id={id}
      className={className}
			disabled={disabled}
			marginTop={marginTop}
			{...rest}
		>
			{children}
		</Styled.Button>
	);
};

export default Button;
