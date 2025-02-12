import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children, redirectPath }) => {
    const { authToken, setAuthToken, user, setUser } = useAuth();

    // Ensure authToken and user are set from sessionStorage on initial load
    React.useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        const storedUser = sessionStorage.getItem('user');
        
            setAuthToken(token);
        
        
            setUser(JSON.parse(storedUser));
        
    }, [authToken, setAuthToken, user, setUser]);

    return authToken ? children : <Navigate to={redirectPath} />;
};

export default PrivateRoute;
