import { createContext, useContext, useState } from 'react'; // [cite: 140]

const AuthContext = createContext(undefined); // [cite: 141-142]

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // [cite: 143-144]

  const login = (username) => setUser({ username }); // [cite: 145]
  const logout = () => setUser(null); // [cite: 146]

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  ); // [cite: 147-150]
}

export function useAuth() {
  const context = useContext(AuthContext); // [cite: 152-153]
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider'); // [cite: 157]
  }
  return context; // [cite: 158]
}