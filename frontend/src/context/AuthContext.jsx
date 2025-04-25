import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('adminToken'));
  useEffect(() => {
    if (token) localStorage.setItem('adminToken', token);
    else localStorage.removeItem('adminToken');
  }, [token]);
  const login = async (email, pwd) => {
    const { data } = await api.post('/auth/login', { email, password: pwd });
    setToken(data.token);
  };
  const logout = () => setToken(null);
  return (
    <AuthContext.Provider value={{ token, login, logout, isLoggedIn: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
