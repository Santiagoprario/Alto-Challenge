import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username: string) => {
    // Realiza la autenticación y establece el usuario en el estado
    setUser(username);
  };

  const logout = () => {
    // Realiza la desautenticación y limpia el usuario del estado
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};