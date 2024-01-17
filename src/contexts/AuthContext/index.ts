import React, { createContext } from 'react';

import useSessionStorage from '~/utils/hooks/useSessionStorage';
import { SessionAuthContext, SessionCompanyContext } from '~/types/session';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  username: string;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [sessionStorageAuth] = useSessionStorage<SessionAuthContext>('AuthContext', null);
  const [sessionStorageCompany] = useSessionStorage<SessionCompanyContext>('CompanyContext', null);
  const accessToken = sessionStorageAuth?.session?.accessToken;

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        company: sessionStorageCompany,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default AuthProvider;
