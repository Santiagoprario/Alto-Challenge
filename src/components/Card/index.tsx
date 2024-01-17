import React from 'react';
import Styled from './styles';

export interface CardProps {
  children?: React.ReactNode;
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {

  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.Title>{title}</Styled.Title>
        {children}
      </Styled.Card>
    </Styled.Container>
  );
};

export default Card;