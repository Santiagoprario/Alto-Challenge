import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styled from './styles';
import { isValidateAge, isValidateEmail } from '../../utils/validation';
import { Button, Card, Checkbox, Input } from '../../components';
import { toast } from 'react-toastify';
import { API_URL } from '../../constants';
import axios from 'axios';

const Form: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    isAssociated: false,
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (newValue: boolean) => {
    setFormData({ ...formData, isAssociated: newValue });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === '' ? 'Este campo es requerido' : '',
      email: !isValidateEmail(formData.email) ? 'Dirección de correo electrónico inválida' : '',
      phone: !formData.phone ? 'Ingrese un Número de Télefono' : '',
      age: !isValidateAge(formData.age) ? 'Debes ser mayor de 18 años' : '',
    };
    setFormErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== '')) {
      const submitForm = await axios.post(
        `${API_URL}/associates`,
        formData
      )
      .then((response) => {
        const { id } = response.data
        toast(`El Afiliado se ha cargado con el Id: ${id}`)
        navigate('/home');
      })
      .catch((error) => toast(error.response.data));
      
      return submitForm;
    }
  };

  return (
    <Card title='Ingrese los datos'>
      <Styled.FormContainer>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            title='Nombre'
            value={formData.name}
            onChange={handleChange}
            errors={formErrors.name}
          />
          <Input
            type="email"
            name="email"
            title='Email'
            value={formData.email}
            onChange={handleChange}
            errors={formErrors.email}
          />
          <Input
            type="tel"
            name="phone"
            title='Telefono'
            value={formData.phone}
            onChange={handleChange}
            errors={formErrors.phone}
          />
          <Input
            type="number"
            name="age"
            title='Edad'
            value={formData.age}
            onChange={handleChange}
            errors={formErrors.age}
          />
          <Checkbox title='¿Sos Socio LatamPass?' value={formData.isAssociated} onChange={handleCheckbox} />

          <Styled.ButtonsContainer>
            <Button type="button" onClick={() => navigate('/home')}>Volver</Button>
            <Button type="submit">Guardar</Button>
          </Styled.ButtonsContainer>

        </form>
      </Styled.FormContainer>
    </Card>
  );
};

export default Form;
