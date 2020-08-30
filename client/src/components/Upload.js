import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../config';
import { Redirect } from 'react-router-dom';
import Feed  from './Feed'
import { useSelector, useDispatch } from 'react-redux'
const Upload = () => {


  const token = useSelector(state => state.authentication.token);


  const uploadFile = async e => {
    var formData = new FormData();
    var imagefile = document.querySelector('#file');
  
    formData.append("thisFile", imagefile.files[0]);
    formData.append("token", token)
    axios.post(`${baseUrl}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    return <Redirect to="/" />
 
  };

  return (
    <Fragment>
     <form id="uploadForm" encType="multipart/form-data" onSubmit={uploadFile}>
<input type="file" id="file" name="thisFile"/>
<button>Submit</button>
</form>
    </Fragment>
  );
};

export default Upload;