import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import PageNotFound from './Pages/PageNotFound'; // New 404 page component
import AuthPage from './Pages/Auth';
import About from './Pages/About';
import Restaurents from './Pages/Restaurents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurents" element={<Restaurents />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>

    
  );
}

export default App;
