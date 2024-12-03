import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; // Your existing Home page component
//import Login from './Pages/Login'; // New Login page component
import PageNotFound from './Pages/PageNotFound'; // New 404 page component
import AuthPage from './Pages/Auth';
//import Signup from './Pages/Signup';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/Signup" element={<Signup />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>

    
  );
}

export default App;
