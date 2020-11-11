import {baseUrl } from "../config"
import { useParams } from 'react-router-dom'
const GET_PHOTOSTREAM = 'Pixr/feed/GET_PHOTOSTREAM';
const GET_ALBUM = 'Pixr/feed/GET_PHOTOSTREAM';
const GET_FOLLOWS = 'Pixr/feed/GET_PHOTOSTREAM';
const GET_GALLERY = 'Pixr/feed/GET_PHOTOSTREAM';
const {userId} = useParams()


export const fetchPhotostream = () => async dispatch => {
  const response = await fetch(`${baseUrl}/feed`)
  if (!response.ok) {
    throw response;
  }

  const data = await response.json()
  dispatch(getPhotostream(data))
}

export const fetchAlbum = () => async dispatch => {
  const response = await fetch(`${baseUrl}/${userId}/album`)
  if (!response.ok) {
    throw response;
  }

  const data = await response.json()
  dispatch(getAlbum(data))
}
export const fetchGallery = () => async dispatch => {
  const response = await fetch(`${baseUrl}/${userId}/gallery`)
  if (!response.ok) {
    throw response;
  }

  const data = await response.json()
  dispatch(getPhotostream(data))
}
export const fetchFollows= () => async dispatch => {
  const response = await fetch(`${baseUrl}/${userId}/follows`)
  if (!response.ok) {
    throw response;
  }

  const data = await response.json()
  dispatch(getPhotostream(data))
}


export const getAlbum = (data) => ({
  type: GET_ALBUM,
  data
})

export const getGallery = (data) => ({
  type: GET_GALLERY,
  data
})
export const getPhotostream = (data) => ({
  type: GET_PHOTOSTREAM,
  data
})
export const getFollows = (data) => ({
  type: GET_FOLLOWS,
  data
})


export default function reducer(state = { 
  photoStream: true,
  album: false,
  gallery: false,
  follows: false
}, action) {
  Object.freeze(state)
  switch (action.type) {
    case GET_PHOTOSTREAM: {
      return { 
        feed: action.data, 
        photoStream: true,
        album: false,
        gallery: false,
        follows: false }
    }
    case GET_ALBUM: {
      return{
       feed: action.data, 
       photoStream: false,
       album: true,
       gallery: false,
       follows: false 

      }
    }
    case GET_GALLERY: {
      return {
        feed: action.data, 
        photoStream: false,
        album: false,
        gallery: true,
        follows: false 
      }
    } 
    case GET_FOLLOWS: {
      return {
        feed: action.data, 
        photoStream: false,
        album: false,
        gallery: false,
        follows: true 
      }
    }
    default: return state
  }
}