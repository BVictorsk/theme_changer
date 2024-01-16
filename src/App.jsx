import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeSelect from './pages/tema/ThemeSelect';
import React, { useState } from 'react';
import './App.css'

import { ThemeProvider, nightTheme, auroraTheme, deepTheme, urbanTheme } from './components/theme/theme';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home'


function App() {
  const [selectedTheme, setSelectedTheme] = useState(nightTheme);

  const changeTheme = (theme) => {
    setSelectedTheme(theme);
  };
  
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
