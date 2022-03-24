import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';



const NavBar = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    return ( 
        <nav style = {{background: theme.ui, color:theme.syntax}}>
            <h2>Context App</h2>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                {console.log(light)}
            </ul>
        </nav>
        
     );
}
 
export default NavBar;