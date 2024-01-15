import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router class="app">
        <div className="app-container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="theme-change" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
