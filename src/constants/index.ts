const API_URL= import.meta.env.VITE_APP_API_URL;
const CURRENT_YEAR = new Date().getFullYear();

const labelsAssociates = {
  name: 'Nombre',
  email: 'Correo Electrónico',
  phone: 'Teléfono',
  age: 'Edad',
  isAssociated: 'Asociado LatamPass',
  id: 'Número de cliente'
}

export { API_URL, CURRENT_YEAR, labelsAssociates };

