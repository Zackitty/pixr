import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/authentication';
import LogoutButton from './LogoutButton';
import Upload from "./Upload"
import Feed from "./Feed"

const NavBar = ({ token }) => {
  return (  
  <div>
  <div className='splash-nav__container'>
    <div className='logo'>Pixr</div>
    <div className='pixr_logout_container'/>
    <LogoutButton />
    </div>
    <Feed />
  </div>
  
  );
};

export default NavBar;