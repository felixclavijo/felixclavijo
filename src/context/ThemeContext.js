// prettier-ignore
import React, { createContext, useState } from "react";

// prettier-ignore
export const ThemeContext = createContext({ theme: "light", undefined, pathname: "/" });

// prettier-ignore
export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')
    const [pathname, setPathname] = useState('/')

    return <ThemeContext.Provider value={{ theme, setTheme, pathname, setPathname }}>
        {children}
    </ThemeContext.Provider>
}
