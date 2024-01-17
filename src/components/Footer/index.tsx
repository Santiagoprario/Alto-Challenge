import React from 'react';
import Styled from './styles';
import { CURRENT_YEAR } from '../../constants';

const Footer: React.FC = () => {
  return (
    <Styled.FooterContainer>
      &copy; {CURRENT_YEAR} Challenge Latam. Todos los derechos reservados.
    </Styled.FooterContainer>
  );
};

export default Footer;