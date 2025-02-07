// src/reducers/patientReducer.js
const initialState = {
    patientData: null,
    loading: false,
    error: null,
};

export const patientReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_PATIENT_SUCCESS':
            return { ...state, patientData: action.payload, loading: false };
        case 'REGISTER_PATIENT_FAILURE':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};