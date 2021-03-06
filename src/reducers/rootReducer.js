import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import eventReducer from '../features/event/eventReducer';
import testReducer from '../features/testarea/testReducer';
import modalReducer from '../features/modals/modalReducer';
import authReducer from '../features/auth/authReducer';
import asyncReducer from './async/asyncReducer';




const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  test: testReducer,
  form: formReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastrReducer
})

export default rootReducer;

