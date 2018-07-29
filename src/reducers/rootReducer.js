import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import eventReducer from '../features/event/eventReducer';
import testReducer from '../features/testarea/testReducer';
import modalReducer from '../features/modals/modalReducer';


const rootReducer = combineReducers({
  test: testReducer,
  form: formReducer,
  events: eventReducer,
  modals: modalReducer
})

export default rootReducer;

