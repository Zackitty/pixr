import React, { useState, useEffect} from 'react';
import Upload from './Upload'
import { baseUrl } from '../config';
import axios from 'axios';

const Feed = ({ token }) => {
  let obj;
  const [state, setState] = useState([])
  useEffect(() => {
      fetch(`${baseUrl}/feed`)
          .then(res => res.json())
          .then(data => setState(data.photos))
      
  }, [])
  
return (
  <div>
    <Upload />
    <div id="feedContainer">
      <div id="pixContainer">
        {state.map(data =>
          <img class="photoFeed" src={`${data.photoPath}`}/>)}
      </div>
    </div>
  </div>
)

}

export default Feed;