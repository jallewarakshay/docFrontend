import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const authToken = sessionStorage.getItem('authToken');
        const storedUser = sessionStorage.getItem('user');
        if (authToken) {
            setAuthToken(authToken);
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
    }, []);

    const value = { authToken, setAuthToken, user, setUser };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
