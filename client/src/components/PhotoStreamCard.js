import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
 import PhotoPopUp from './PhotoPopUp'
 const PhotoStreamCard = ({user, userId, img, imgAvatar, name, description}) => {
  
  const my_id = localStorage.getItem("USER_ID");
  const [myPhoto, setMyPhoto] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = async (e) => {
    e.preventDefault()
    setIsOpen(true)
  } 
if (my_id === userId)
{setMyPhoto(true)}
  
  return (
     <div>
       <div className="photoStreamTopBar">
       <div className="photoStreamAvatar">
         <img src={imgAvatar} className='photoStreamAvatarImage'></img>
       </div>
       <div className="photoStreaNameAndDate">
          <div className="photoStreamName">{user}</div>
          <div className="photoDate">{Date.now()}</div>
        </div>
      </div>
      <div className="photoStreamSrollDown">
        {        <PhotoPopUp className="tryThisDiv" open={isOpen} onClose={() => setIsOpen(false)}/>}
      </div>
      <img src={img} className='photoStreamImage'></img>
   <div className="photoStreamImageName">{name}</div>
   <div className="photoStreamDescription">{description}</div>
     </div>
   )
 }
 
 export default PhotoStreamCard
 