import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, setisAuthenticated] = useState(false);

    const toggleAuth = () => {
        setisAuthenticated(!isAuthenticated);
    }
    return ( 
        <AuthContext.Provider value={{isAuthenticated, toggleAuth:toggleAuth}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;
