import React, { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
    if (!isLogin && !formData.name) {
      setError('Please enter your name');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (validateForm()) {
      setTimeout(() => {
        setSuccess(true);
        setFormData({ email: '', password: '', name: '' });
      }, 1000);
    }
  };

  const backgroundStyle = {
    background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
    minHeight: '100vh'
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '15px',
    border: 'none',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle = {
    borderRadius: '10px',
    padding: '12px',
    border: '1.5px solid #e0e0e0',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
    border: 'none',
    borderRadius: '10px',
    padding: '12px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease'
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center py-5" style={backgroundStyle}>
      <div className="card" style={cardStyle}>
        <div className="card-body p-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2" style={{color: '#2d2d2d'}}>
              {isLogin ? 'Welcome Back! 👋' : 'Create Account ✨'}
            </h2>
            <p className="text-muted">
              {isLogin ? 'Please enter your details to continue' : 'Start your journey with us today'}
            </p>
          </div>

          {error && (
            <div className="alert alert-danger border-0 rounded-3 shadow-sm" role="alert">
              <i className="bi bi-exclamation-circle me-2"></i>
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success border-0 rounded-3 shadow-sm" role="alert">
              <i className="bi bi-check-circle me-2"></i>
              {isLogin ? 'Welcome back! Redirecting...' : 'Account created successfully!'}
            </div>
          )}

          <form onSubmit={handleSubmit} className="needs-validation">
            {!isLogin && (
              <div className="mb-4">
                <label className="form-label fw-semibold mb-2">Full Name</label>
                <div className="input-group">
                  <span className="input-group-text border-0 bg-light">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-0 bg-light"
                    style={inputStyle}
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}

            <div className="mb-4">
              <label className="form-label fw-semibold mb-2">Email Address</label>
              <div className="input-group">
                <span className="input-group-text border-0 bg-light">
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control border-0 bg-light"
                  style={inputStyle}
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold mb-2">Password</label>
              <div className="input-group">
                <span className="input-group-text border-0 bg-light">
                  <i className="bi bi-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control border-0 bg-light"
                  style={inputStyle}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="d-grid gap-2 mb-4">
              <button 
                type="submit" 
                className="btn btn-primary btn-lg"
                style={buttonStyle}
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </div>

            <div className="text-center">
              <p className="text-muted mb-0">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  type="button"
                  className="btn btn-link text-primary text-decoration-none fw-semibold"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError('');
                    setSuccess(false);
                    setFormData({ email: '', password: '', name: '' });
                  }}
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;