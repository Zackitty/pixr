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


export default function reducer(state = {}, action) {
  Object.freeze(state)
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_PHOTOSTREAM: {
      return action.data
    }
    case GET_ALBUM: {
      return action.data
    }
    case GET_GALLERY: {
      return action.data
    } 
    case GET_FOLLOWS: {
      return action.data
    }
    default: return newState
  }
}