import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

const PhotoPopUp = ({open, children, onClose}) => {
  const handleBlockClick = async (e) => {
    e.preventDefault()
    onClose()
  }

  if (!open) return null;
  return (
    <div>
      <button className="blockButton" onClick={handleBlockClick}>Follow User</button>
      {myPhoto ?  
       <button className="galleryButton"  onClick={handleGalleryClick}>Add Photo To Gallery</button> 
       :
       <button className="albumButton" onClick={handleAlbumClick}>Add Photo To Album</button>
      }
      <button className="exitButton" id={`exit${belt_color}`} onClick={onClose}>Exit</button>
      {children}
    </div>
  )
}

export default PhotoPopUp
