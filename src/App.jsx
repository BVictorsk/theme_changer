import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeSelect from './pages/tema/ThemeSelect';
import React, { useState, useEffect } from 'react';
import './App.css'

import { ThemeProvider, nightTheme, auroraTheme, deepTheme, urbanTheme } from './components/theme/theme';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home'


function App() {
  const [selectedTheme, setSelectedTheme] = useState(() => {
    // Tenta obter o tema do localStorage
    const storedTheme = localStorage.getItem('selectedTheme');
    // Se existir, retorna o tema armazenado, senão retorna o tema padrão (nightTheme)
    return storedTheme ? JSON.parse(storedTheme) : nightTheme;
  });

  const changeTheme = (theme) => {
    setSelectedTheme(theme);
  };
  
  // Efeito para salvar o tema no localStorage sempre que o tema é alterado
  useEffect(() => {
    localStorage.setItem('selectedTheme', JSON.stringify(selectedTheme));
  }, [selectedTheme]);

  
  return (
    <>
    <ThemeProvider theme={selectedTheme}>
        <Router class="app">
          <div className="app-container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="theme-change" element={<ThemeSelect changeTheme={changeTheme} />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
