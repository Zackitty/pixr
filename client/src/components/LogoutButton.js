import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../actions/authentication';

const LogoutButton = () => {
  const loggedOut = useSelector(state => !state.authentication.token);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logout());

  if (loggedOut) {
    return <Redirect to="/login" />;
  }

  return (
    <div id="logout-button-holder">
      <div onClick={handleClick}>Logout</div>
    </div>
  );
};

export default LogoutButton;
