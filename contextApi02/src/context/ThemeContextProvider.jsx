
import React from 'react';
import ThemeContext from './ThemeContext';
import { useState } from 'react';

export default function ThemeContextProvider({ children }) {
    let [Theme,setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{Theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}