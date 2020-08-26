import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk),
  );
};

// export const signUp = (firstName, lastName, email, password, title, profPic) => async dispatch => {
//   try {
   
//    const response = await fetch(`${baseUrl}/api/upload`, {
//       method: 'post',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(),
//     });
//     if (!response.ok) {
//       throw response
//     }

//   }
//   catch (err) {
//     console.error(err);
//   }
// }

export default configureStore;
