import React, { Fragment, useState } from 'react';
import { selectFields } from 'express-validator/src/select-fields';
import axios from 'axios'

const Upload = ({ token }) => {
const [file, setFile] = useState('');
const [filename, setFilename] = useState('Choose File')
const [uploadedFile, setUploadedFile] = useState({ })
  const onChange = e => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  const onSubmit = async e => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      const {fileName, filePath} = res.data;
      setUploadedFile({ fileName, filePath})
    } catch(err) {
      if(err.response.status === 500){
        console.log('There was a problem with the server')
      }else {
        console.log(err.response.data.msg)
      }
    }
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit}> 
        <div className='custom-file'>
          <input type='file' className='custom-file-input' id='customFile' onChange={onChange} />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
            </label>
        </div>

        <input type="submit" value="Upload" className="btn" />
      </form>
      { uploadedFile ? <div className="row">
        <h3>{uploadedFile.fileName}</h3>
        <img src={uploadedFile.filePath} alt=""/>
      </div> : null}
    </Fragment>
  );
};



export default Upload