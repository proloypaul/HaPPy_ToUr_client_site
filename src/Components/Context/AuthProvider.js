import React, {createContext} from 'react';
import UseFirebase from '../Hooks/UseFirebase';

export const AuthContex = createContext()
const AuthProvider = ({children}) => {
    const allContext = UseFirebase()
    return (
        <AuthContex.Provider value={allContext}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;