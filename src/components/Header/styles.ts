import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #241178;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 60px;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const LogoutButton = styled.button`
  background-color: white;
  color: #241178;
  border: 2px solid #241178;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 100px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3498db;
    color: white;
  }
`;

export default { HeaderContainer, LogoutButton, LogoContainer, Logo, LogoText }