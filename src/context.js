import { createContext, useState } from "react";
import React from "react";

export const ThemeContext = createContext();

export const Theme = ({ children }) =>{
    const [nig, becomeNig] = useState(false);

    const switchinTime = () => {
       becomeNig(!nig)
       console.log(nig)
    }
    return(
        <ThemeContext.Provider value={{switchinTime, nig, becomeNig}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default Theme;