import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import PageNotFound from './Pages/PageNotFound'; // New 404 page component
import AuthPage from './Pages/Auth';
import About from './Pages/About';
import Restaurents from './Pages/Restaurents';
import Menu from './Pages/Menu';
import Payment from './Pages/Payment';
import SeeReservations from './Pages/SeeReservations';
import Admin from './Pages/Admin';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurents" element={<Restaurents />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/see" element={<SeeReservations />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>

    
  );
}

export default App;
