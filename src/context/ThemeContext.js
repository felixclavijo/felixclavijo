// prettier-ignore
import React, { createContext, useState } from "react";

// prettier-ignore
export const ThemeContext = createContext({ theme: "light", undefined, pathname: "/" });

// prettier-ignore
export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')
    const [pathname, setPathname] = useState(window.location.pathname)
    const [img_height, setImg_height] = useState(0)
    const [app_height, setApp_height] = useState(0)

    return <ThemeContext.Provider value={{ theme, setTheme, pathname, setPathname, img_height, setImg_height, app_height, setApp_height }}>
        {children}
    </ThemeContext.Provider>
}
