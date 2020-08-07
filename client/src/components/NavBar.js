import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/authentication';
import LogoutButton from './LogoutButton';
import Upload from "./Upload"

const NavBar = ({ token }) => {
  return (
    <main>
      <LogoutButton token={token} />
      <Upload token={token} />
      <nav>
        <div>Hello World!</div>
      </nav>
    </main>
  );
};

export default NavBar;