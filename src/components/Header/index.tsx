import React from 'react';
import Styled from './styles';
import logo from './../../assets/latam-logo.png';

interface HeaderProps {
  onLogout: () => void;
  goHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout, goHome }) => {
  return (
    <Styled.HeaderContainer>
      <Styled.LogoContainer onClick={goHome}>
        <Styled.Logo src={logo} alt="Logo" />
        <Styled.LogoText>Challenge Latam</Styled.LogoText>
      </Styled.LogoContainer>
      <Styled.LogoutButton onClick={onLogout}>Cerrar Sesión</Styled.LogoutButton>
    </Styled.HeaderContainer>
  );
};

export default Header;