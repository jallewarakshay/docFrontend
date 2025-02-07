// src/actions/index.js
export const setRes = (data) => {
    return {
      type: 'SET_RES',
      payload: data,  // This is the data to update in the state
    };
  };