import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../actions/authentication';
import { baseUrl } from '../config';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(email, password));
  };
  const dispatch = useDispatch();

  const register = (email, password) => async dispatch => {
    const response = await fetch(`${baseUrl}/register`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  };
  const updateEmail = e => setEmail(e.target.value);
  const updatePassword = e => setPassword(e.target.value);

return (
  <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group">
          <label>Email address</label>
          <input type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail} />
      </div>

      <div className="form-group">
          <label>Password</label>
          <input  type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword} />
      </div>

      <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
      <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
      </p>
      </form>
)
}

export default Register