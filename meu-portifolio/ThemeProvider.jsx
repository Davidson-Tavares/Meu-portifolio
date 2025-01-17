// ThemeProvider.js
//importações dos Hooks do react
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado do tema, inicializado como 'light'

  //salvar o modo escolhido pelo usuario

  useEffect(() => {
    const savedTheme= localStorage.getItem('theme') || 'light';
    setTheme(savedTheme)
  }, []);

  // Atualiza o atributo data-theme no elemento html sempre que o tema muda
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme' , theme)
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
