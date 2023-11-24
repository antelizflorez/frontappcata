// SignIn.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signin = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleSignIn = () => {
        // Lógica de inicio de sesión aquí
      };

      return (

        <div className="container mt-5">
          <h2>Sign In</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleSignIn}>
              Sign In
            </button>
            <p className="mt-3">
              Don't have an account? <Link to="/Signup">Sign Up</Link>
            </p>
          </form>
        </div>
  );
};

export {Signin}
