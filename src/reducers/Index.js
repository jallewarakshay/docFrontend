// src/reducers/index.js
import { combineReducers } from 'redux';
import loginReducer from '../reducers/LoginReducer'  // Import loginReducer
import { patientReducer } from './patientReducer';
const rootReducer = combineReducers({
  loginReducer,  // Add loginReducer to your combined reducers
  patient: patientReducer,
});

export default rootReducer;