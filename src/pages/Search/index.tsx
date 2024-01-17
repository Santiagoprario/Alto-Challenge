import React, { FunctionComponent, useState } from 'react';
import Styled from './styles';
import { Card, SearchBar } from '../../components';
import { IAssociate } from '../../types/Associates';
import { getLabelAssociate } from '../../utils/labels';
import { API_URL } from '../../constants';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Search: FunctionComponent = () => {
  const [ id, setId ] = useState('');
  const [ associate, setAssociate ] = useState<IAssociate>({} as IAssociate);

  const navigate = useNavigate()

  const handleSearch = async () => {
    if (isNaN(Number(id))) return toast('Por favor ingrese un número de Id válido')
    const response = await axios.get(
      `${API_URL}/associates/${id}`,
    )
    .then((response) => response.data)
    .catch(() => toast(`No se ha encontrado el ID: ${id}`));
    setAssociate(response)
    return response;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  return (
    <div style={{height: '650px'}}>
      <Styled.SearchBarContainer>
        <SearchBar onGoBack={() => navigate('/home')} onSearch={handleSearch} onChange={handleChange} value={id} disabled={!id} placeholder='Ingrese un Id para búscar' />
      </Styled.SearchBarContainer>
      {!!associate.name && 
        <Card title={`Detalle del Asociado Nro. ${associate.id}`}>
          {Object.entries(associate).map(([key, value]) => {
            const keyRender = getLabelAssociate(key as keyof IAssociate);
            let valueRender = value;
            if (typeof value === 'boolean') {
              valueRender = value ? 'Sí' : 'No'
            }
            return (
              <Styled.DetailContainer key={key}>
                  <strong>{keyRender}: </strong>{valueRender}
              </Styled.DetailContainer>
            )
          })}
        </Card>
      }
    </div>
  );
};

export default Search;
