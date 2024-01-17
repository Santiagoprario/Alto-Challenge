import React, { FunctionComponent } from 'react';
import { Header, Footer, Button } from '../../components';
import { Outlet, useNavigate } from 'react-router-dom';
import Styled from './styles';
import { toast } from 'react-toastify';

const Home: FunctionComponent = () => {
  const navigate = useNavigate();
  
  const onLogout = () => {
    localStorage.clear()
    toast('Se ha cerrado sesión correctamente')
    navigate('/login');
  };

  return (
    <>
      <Header onLogout={onLogout} goHome={() => navigate('/home')} />
      <Styled.ButtonsContainer>
        <Button onClick={() => navigate('forms')}>Crear Nuevo Afiliado</Button>
        <Button onClick={() => navigate('search')}>Buscar Afiliados</Button>
      </Styled.ButtonsContainer>
      <Styled.OutletContainer>
        <Outlet />
      </Styled.OutletContainer>
      <Footer />
    </>
  );
};

export default Home;
