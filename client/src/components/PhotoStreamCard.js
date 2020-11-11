import React from 'react'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
 
 const PhotoStreamCard = (props) => {
   return (
     <div>
       <div className="photoStreamTopBar">
       <div className="photoStreamAvatar">
         <img src={} className='photoStreamAvatarImage'></img>
       </div>
       <div className="photoStreaNameAndDate">
          <div className="photoStreamName">{}</div>
          <div className="photoDate">{}</div>
        </div>
      </div>
      <div className="photoStreamSrollDown">
        {}
      </div>
      <img src={} className='photoStreamImage'></img>
   <div className="photoStreamImageName">{}</div>
   <div className="photoStreamDescription">{}</div>
     </div>
   )
 }
 
 export default PhotoStreamCard
 