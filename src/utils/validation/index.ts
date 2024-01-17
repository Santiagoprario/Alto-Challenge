export const isValidateEmail = (email: string) => {
  return /^\S+@\S+$/i.test(email);
};

export const isValidateAge = (edad: string) => {
  const parsedEdad = parseInt(edad, 10);
  return !isNaN(parsedEdad) && parsedEdad >= 18;
};
