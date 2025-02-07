// src/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correct import for thunk
import { combineReducers } from 'redux';
import loginReducer from '../reducers/LoginReducer'; // Import loginReducer
import { patientReducer } from '../reducers/patientReducer'; // Import patientReducer

// Combine the reducers
const rootReducer = combineReducers({
  login: loginReducer,  // Handles registration state (doctor, patient)
  patient: patientReducer,  // Handles patient-specific state
});

// Create the store with redux-thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;