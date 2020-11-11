import {baseUrl } from "../config"


const GET_PHOTOSTREAM = 'Pixr/feed/GET_PHOTOSTREAM';
const GET_ALBUM = 'Pixr/feed/GET_PHOTOSTREAM';
const GET_FOLLOWS = 'Pixr/feed/GET_PHOTOSTREAM';
const GET_GALLERY = 'Pixr/feed/GET_PHOTOSTREAM';



export const fetchPhotostream = () => async dispatch => {
  const response = await fetch(`${baseUrl}/feed`)
  if (!response.ok) {
    throw response;
  }

  const data = await response.json()
  dispatch(getPhotostream(data))
}

export const getPhotostream = (data) => ({
  type: GET_PHOTOSTREAM,
  data
})

export const fetchAlbum = (userId) => async dispatch => {
  const response = await fetch(`${baseUrl}/${userId}/album`)
  if (!response.ok) {
    throw response;
  }

  const data = await response.json()
  dispatch(getAlbum(data))
}

export const getAlbum = (data) => ({
  type: GET_ALBUM,
  data
})

export const fetchGallery = (userId) => async dispatch => {
  const response = await fetch(`${baseUrl}/${userId}/gallery`)
  if (!response.ok) {
    throw response;
  }

  const data = await response.json()
  dispatch(getGallery(data))
}

export const getGallery = (data) => ({
  type: GET_GALLERY,
  data
})


export const fetchFollows= (userId) => async dispatch => {
  const response = await fetch(`${baseUrl}/${userId}/follows`)
  if (!response.ok) {
    throw response;
  }

  const data = await response.json()
  dispatch(getFollows(data))
}

export const getFollows = (data) => ({
  type: GET_FOLLOWS,
  data
})


export default function reducer(state = { 
  feed: {},
  photoStream: true,
  album: false,
  gallery: false,
  follows: false, 
}, action) {
  Object.freeze(state)
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_PHOTOSTREAM: {
      return { 
        feed: action.data, 
        photoStream: true,
        album: false,
        gallery: false,
        follows: false 
      }
    }
    case GET_ALBUM: {
      return{
       feed: action.data, 
       photoStream: true,
       album: false,
       gallery: false,
       follows: false 

      }
    }
    case GET_GALLERY: {
      return {
        feed: action.data, 
        photoStream: true,
        album: false,
        gallery: false,
        follows: false 
      }
    } 
    case GET_FOLLOWS: {
      return {
         feed: action.data, 
       photoStream: true,
       album: false,
       gallery: false,
       follows: false 
      }
    }
    default: return state
  }
}