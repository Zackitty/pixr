import React, { Fragment, useState } from 'react';
import Upload from './Upload'
import { baseUrl } from '../config';
import Photo from './Upload'
const aws = require('aws-sdk');





const Feed = () => {


  
return (
  <div>
  <Upload />
  {/* <Photo /> */}
  </div>
)

}


export default Feed;