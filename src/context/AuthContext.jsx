import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in on page load
  useEffect(() => {
    const storedUser = localStorage.getItem('corvina_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Register new user
  const register = (name, email, password) => {
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('corvina_users') || '[]');
    if (users.find(u => u.email === email)) {
      throw new Error('Cet email est déjà utilisé');
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      name,
      email,
      password, // In real app, hash this!
      createdAt: new Date().toISOString()
    };

    // Save to users list
    users.push(newUser);
    localStorage.setItem('corvina_users', JSON.stringify(users));

    // Log user in
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('corvina_user', JSON.stringify(userWithoutPassword));
    
    return userWithoutPassword;
  };

  // Login existing user
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('corvina_users') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (!foundUser) {
      throw new Error('Email ou mot de passe incorrect');
    }

    const { password: _, ...userWithoutPassword } = foundUser;
    setUser(userWithoutPassword);
    localStorage.setItem('corvina_user', JSON.stringify(userWithoutPassword));
    
    return userWithoutPassword;
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('corvina_user');
  };

  const value = {
    user,
    isLoading,
    register,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}