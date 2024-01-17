import React, { useState } from 'react';
import Styled from './styles';
import { Button, Input } from '../../components';
import axios from 'axios';
import { API_URL } from '../../constants';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import logo from './../../assets/latam-logo.png';
import { isValidateEmail } from '../../utils/validation';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '', 
    password: ''
  });

  const isValidPassword = (password: string) => {
    return password.length > 4;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  };

  const onSubmit = async () => {
    if (!isValidateEmail(formData.email)) {
      toast('Email no válido');
      return;
    }
    if (!isValidPassword(formData.password)) {
      toast('Ingrese una contraseña válida');
      return;
    }

    const response = await axios.post(
      `${API_URL}/login`,
      formData
    )
    .then((response) => {
      const { accessToken, userProfile } = response.data;
      localStorage.setItem('accessToken', JSON.stringify(accessToken))
      localStorage.setItem('userProfile', JSON.stringify(userProfile))      
      toast(`Bienvenido!`)
      navigate('/home');
    })
    .catch((error) => {
      if (error.response.data === 'Cannot find user') {
        return toast('No se ha encontrado el email ingresado')
      }
      if (error.response.data === 'Incorrect password') {
        return toast('Contraseña incorrecta. Por favor reintente.')
      }
      return toast(error.response.data)
    });

    return response;
  };


  return (
    <Styled.Container>
      <Styled.Card>
        <img src={logo} alt='logo' />
        <Styled.Title>Inicio de Sesión</Styled.Title>
        <Input type='text' name='email' placeholder='Email' value={formData.email} onChange={(e) => handleChange(e)} />
        <Input type="password" name='password' placeholder="Contraseña" value={formData.password} onChange={(e) => handleChange(e)} />
        <Styled.ButtonsContainer>
          <Button disabled={!formData.email || ! formData.password} onClick={onSubmit}>Ingresar</Button>
        </Styled.ButtonsContainer>
      </Styled.Card>
    </Styled.Container>
  );
};

export default Login;
