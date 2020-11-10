import React from 'react'
import PropTypes from 'prop-types'

const StreamBar = (props) => {

  const photoStreamClick = () => {}
  const followStreamClick = () => {}
  const albumsStreamClick = () => {}
  const galleriesStreamClick = () => {}

  return (
    <div className="streamBarDiv">
      <div classname='photoStreamButton' onClick={photoStreamClick}>Photostream</div>
      <div classname='followsStreamButton' onClick={followStreamClick}>Followstream</div>
      <div classname='albumsStreamButton' onClick={albumsStreamClick}>Albums</div>
      <div classname='galleriesStreamButton' onClick={galleriesStreamClick}>Galleries</div>
    </div>
  )
}


export default StreamBar

