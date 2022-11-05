import { createContext, useState } from "react";
import React from "react";

export const ThemeContext = createContext();

export const Theme = ({ children }) =>{
    const [nig, becomeNig] = useState(0);

    const switchinTime = () => {
       becomeNig(!nig)
    }
    return(
        <ThemeContext.Provider value={{switchinTime, nig}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default Theme;