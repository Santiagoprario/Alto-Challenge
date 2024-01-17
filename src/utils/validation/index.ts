export const validateEmail = (email: string) => {
  return /^\S+@\S+$/i.test(email);
};

export const validateAge = (edad: string) => {
  const parsedEdad = parseInt(edad, 10);
  return !isNaN(parsedEdad) && parsedEdad >= 18;
};
