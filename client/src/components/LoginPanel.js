import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../actions/authentication';

const LoginPanel = () => {
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');
  const token = useSelector(state => state.authentication.token);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  const handleClick = () =>  <Link to="/register"/>;
  
    
  const updateEmail = e => setEmail(e.target.value);
  const updatePassword = e => setPassword(e.target.value);

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <main className="login-panel">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword} />
        <button type="submit">Login</button>
      </form>
      <input type="button" onClick={handleClick} value="Register" />
    </main>
  );
  }

export default LoginPanel;
