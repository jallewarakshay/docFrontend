// src/reducers/loginReducer.js
const initialState = {
    res: null,  // This is the initial state for res
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_DOCTOR':
        return { ...state, res: action.payload }; // Update res on registration

        case 'REGISTER_PATIENT':
      return { ...state, res: action.payload };
      
      default:
        return state;
    }
  };
  
  
  export default loginReducer;