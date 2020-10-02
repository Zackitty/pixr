import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Layer } from 'grommet';
import './auth.css';
import { useHistory} from 'react-router-dom'
import Signin from './Signin';
import SignUp from './SignUp';

const SignInButton = (props) => {

  const [showIn, setShowIn] = useState(false)
  const [showUp, setShowUp] = useState(false)
  const { label, onClickProp} = props
  const { needSignIn } = useSelector(state => state.currentUser)
  let history = useHistory()
  const UPDATE_NAV = localStorage.getItem("UPDATE_NAV")
  useEffect(() => {
    if (!needSignIn) {
      close()
    }
    return history.push(`/`);
  }, [needSignIn])

  const close = () => {
    setShowIn(false)
    setShowUp(false)
  }

  
  const toggleLast = () => {
    if (!showIn && !showUp) {
      setShowUp(false)
      setShowIn(true)
  
    } else if (!showIn && showUp) {
      setShowUp(false)
      setShowIn(true)
  
    } else if (showIn && !showUp) {
      setShowIn(false)
      setShowUp(true)
  
    }
  }

  return (
    <Box>
     
      <button
        label={'Sign In'}
        className={'signInButton'}
        onClick={() => { onClickProp ? onClickProp() : toggleLast() }} >Sign Up!</button>
        
      {(showIn || showUp) && (
        <Layer
          onEsc={() => close()}
          onClickOutside={() => close()}
        >
          {showIn ?
            (
              <Signin toggleLast={toggleLast} />
            ) : (
              <SignUp toggleLast={toggleLast} />
            )
          }
        </Layer>
      )}
    </Box>
  )
}

export default SignInButton;