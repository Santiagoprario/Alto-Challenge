import React, { useState } from 'react';
import Styled from './styles';
import { Button, Input } from '../../components';
import axios from 'axios';
import { API_URL } from '../../constants';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import logo from './../../assets/latam-logo.png';

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '', // required
    password: '' // required
  });

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPassword = (password: string) => {
    return password.trim() !== '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  };

  const onSubmit = async () => {
    if (!isValidEmail(formData.email)) {
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
      navigate('/home');
    })
    .catch((error) => toast(error.response.data));

    return response;
  };


  return (
    <Styled.Container>
      <Styled.Card>
        <img src={logo} alt='logo' />
        <Styled.Title>Inicio de Sesión</Styled.Title>
        <Input type='text' name='email' placeholder='Email' value={formData.email} onChange={(e) => handleChange(e)} />
        <Input type="password" name='password' placeholder="Contraseña" value={formData.password} onChange={(e) => handleChange(e)} />
        <Button disabled={!formData.email || ! formData.password}  marginTop='30px' onClick={onSubmit}>Ingresar</Button>
      </Styled.Card>
    </Styled.Container>
  );
};

export default Login;
