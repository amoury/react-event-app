import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import eventReducer from '../features/event/eventReducer';
import testReducer from '../features/testarea/testReducer';
import modalReducer from '../features/modals/modalReducer';
import authReducer from '../features/auth/authReducer';



const rootReducer = combineReducers({
  test: testReducer,
  form: formReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer
})

export default rootReducer;

