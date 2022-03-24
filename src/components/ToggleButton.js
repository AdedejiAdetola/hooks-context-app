import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleButton = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={ toggleTheme }>Change the Theme</button>
    );
};
 
export default ToggleButton;