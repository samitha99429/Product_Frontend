import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/login.css';

const API_BASE_URL = 'https://products-backend-o5lx.onrender.com/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/login`,
        { email, password },
        {
          withCredentials: true, // Include credentials like cookies
        }
      );

      localStorage.setItem('token', response.data.token);
      console.log(response.data.token);
      navigate('/homepage');
    } catch (err) {
      console.error(err);
      setError('Invalid email or password');
      alert('Invalid email or password');
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="loginCard p-5 shadow">
          <div className="text-center mb-4">
            <h2 className="logoText">CODE94</h2>
          </div>
          <h3 className="text-center mb-4">Sign in</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                className="form-control"
                type="email"
                value={email}
                placeholder="@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block">SIGN IN</button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p>Don't have an account? <a href="/register">Create an account</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
