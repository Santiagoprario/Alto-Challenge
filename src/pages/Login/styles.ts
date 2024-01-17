import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonsContainer = styled.div`
  margin-top: 30px;
`;

const Card = styled.div`
  display: flex;
  width: 30%;
  max-width: 500px;
  margin-top: 10%;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
    width: 50%;
  }

`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #241178;
`;

export default { ButtonsContainer, Card, Container, Title };
