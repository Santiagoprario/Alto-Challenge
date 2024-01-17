import React, { FunctionComponent } from 'react';
import { Header, Footer, Button } from '../../components';
import { Outlet, useNavigate } from 'react-router-dom';
import Styled from './styles';

const Home: FunctionComponent = () => {
  const navigate = useNavigate();
  
  const onLogout = () => {
    localStorage.clear()
    navigate('/login');
  };

  return (
    <>
      <Header onLogout={onLogout} goHome={() => navigate('/home')} />
      <div>
        <h2>Por favor, seleccione una opción</h2>
        <Styled.ButtonsContainer>
          <Button onClick={() => navigate('forms')}>Crear Nuevo Afiliado</Button>
          <Button onClick={() => navigate('search')}>Buscar Afiliados</Button>
        </Styled.ButtonsContainer>
      </div>
      <Styled.OutletContainer>
        <Outlet />
      </Styled.OutletContainer>
      <Footer />
    </>
  );
};

export default Home;
