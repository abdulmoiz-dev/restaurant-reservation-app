import React, { useState } from 'react';

const Login = ({ onSwitch }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        if (response.ok) {
          setSuccess(true);
          window.location.href = `${window.location.origin}/home`;
        } else {
          setError(data.message || 'Something went wrong. Please try again.');
        }
      } catch (err) {
        setError('Unable to connect to the server. Please try again later.');
      }
    }
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">Welcome Back! 👋</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Welcome back! Redirecting...</div>}
      <div className="mb-3">
        <label>Email Address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleInputChange}
        />
        
      </div>
      <button type="submit" className="btn btn-primary w-100">Sign In</button>
      <div className="text-center mt-3">
        Don't have an account?{' '}
        <button type="button" className="btn btn-link" onClick={onSwitch}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Login;
