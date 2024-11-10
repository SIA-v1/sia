// app/hooks/AuthProvider.js (or wherever you place it)
"use client";
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Example state to manage user authentication

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Optional: Create a custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);