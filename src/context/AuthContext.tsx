import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';

interface AuthContextType {
  usuario: string | null;
  entrar: (email: string) => void;
  sair: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<string | null>(null);

  function entrar(email: string) {
    setUsuario(email);
  }

  function sair() {
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ usuario, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro de AuthProvider');
  }

  return context;
}
