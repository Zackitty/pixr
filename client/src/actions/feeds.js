import { baseUrl } from '../config';

export const HIDE_FORM = 'HIDE_FORM';
export const LOAD = 'LOAD';
export const SET_CURRENT = 'SET_CURRENT';
export const SHOW_FORM = 'SHOW_FORM';

export const hideForm = () => ({
  type: HIDE_FORM,
});

export const showForm = () => ({
  type: SHOW_FORM,
});

const load = list => ({
  type: LOAD,
  list,
});


const setCurrent = current => ({
  type: SET_CURRENT,
  current,
});

export const createFeed = data => async (dispatch, getState) => {
  const { authentication: { token } } = getState();
  const response = await fetch(`${baseUrl}/feed`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    dispatch(hideForm());
    dispatch(getPhotos());
  }
};

export const getOnePhoto = id => async (dispatch, getState) => {
  const { authentication: { token } } = getState();
  const response = await fetch(`${baseUrl}/feed/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const current = await response.json();
    dispatch(setCurrent(current));
  }
};

export const getPhotos = () => async (dispatch, getState) => {
  const { authentication: { token } } = getState();
  const response = await fetch(`${baseUrl}/feed`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};