import { ReactNode, createContext, useEffect, useState } from "react";
// import { authStatus } from "../helpers/apiCommunicator";

type User={
    name:string;
    email:string;
    userType:string;
};

type Theme={
    darkTheme:boolean;
    changeTheme:()=>void;
};

export const ThemeContext=createContext<Theme | null>(null);

export const ThemeProvider=({children}:{children:ReactNode})=>{

    const [user,setUser]=useState<User | null>(null);
    const [isLoggedIn,setIsLoggedIn]=useState<boolean>(false);

    // useEffect(()=>{
    //     const checkStatus=async()=>{
    //         const data=await authStatus();
    //         if(data){
    //             setUser({name:data.username,email:data.email,userType:data.userType});
    //             setIsLoggedIn(true);
    //         }
    //     };
    //     checkStatus();
    // },[]);

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