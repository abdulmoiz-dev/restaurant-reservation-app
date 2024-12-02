import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => setIsLogin((prev) => !prev);

  const backgroundStyle = {
    background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  };

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        {isLogin ? <Login onSwitch={toggleAuthMode} /> : <Signup onSwitch={toggleAuthMode} />}
      </div>
    </div>
  );
};

export default AuthPage;
