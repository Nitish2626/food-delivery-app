import { ReactNode, createContext, useState } from "react";

type Theme={
    darkTheme:boolean;
    changeTheme:()=>void;
}

export const ThemeContext=createContext<Theme | null>(null);

export const ThemeProvider=({children}:{children:ReactNode})=>{

    const [darkTheme,setdarkTheme]=useState<boolean>(false);

    const changeTheme=()=>{
        setdarkTheme((prev)=>!prev);
    };

    return(
        <ThemeContext.Provider value={{darkTheme,changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};