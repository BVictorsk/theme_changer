import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import { ThemeProvider, nightTheme } from './components/theme/theme';
import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeSelect from './pages/tema/ThemeSelect';


function App() {
  return (
    <>
    <ThemeProvider theme={nightTheme}>
        <Router class="app">
          <div className="app-container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="theme-change" element={<ThemeSelect />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
