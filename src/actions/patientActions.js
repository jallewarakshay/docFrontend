// src/actions/patientActions.js
export const RegisterPatient = (data) => {
    return async (dispatch) => {
        try {
            // Make API call to register patient here
            const response = await fetch('/api/register-patient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (response.ok) {
                // Dispatch success action
                dispatch({
                    type: 'REGISTER_PATIENT_SUCCESS',
                    payload: result,
                });
            } else {
                // Dispatch failure action
                dispatch({
                    type: 'REGISTER_PATIENT_FAILURE',
                    payload: result,
                });
            }
        } catch (error) {
            dispatch({
                type: 'REGISTER_PATIENT_FAILURE',
                payload: error.message,
            });
        }
    };
};