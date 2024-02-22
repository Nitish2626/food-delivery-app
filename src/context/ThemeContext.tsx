import { ReactNode, createContext, useEffect, useState } from "react";
import { authStatus, loginUser } from "../helpers/apiCommunicator";

type User={
    name:string;
    email:string;
    userType:string;
};

type Theme={
    darkTheme:boolean;
    changeTheme:()=>void;
    login:(email:string,password:string)=>void;
};

export const ThemeContext=createContext<Theme | null>(null);

export const ThemeProvider=({children}:{children:ReactNode})=>{

    const [user,setUser]=useState<User | null>(null);
    const [isLoggedIn,setIsLoggedIn]=useState<boolean>(false);

    useEffect(()=>{
        const checkStatus=async()=>{
            const data=await authStatus();
            if(data){
                setUser({name:data.username,email:data.email,userType:data.userType});
                setIsLoggedIn(true);
            }
        };
        checkStatus();
        console.log("before",user,isLoggedIn);
    },[]);
    console.log("after",user,isLoggedIn);

    const login=async(email:string,password:string)=>{
        // const data=await loginUser(email,password);
        // if(data){
        //     setUser({name:data.name,email:data.email,userType:data.userType});
        //     setIsLoggedIn(true);
        //     console.log("data",data);
        // }
        // return data;
    }

    const [darkTheme,setdarkTheme]=useState<boolean>(false);

    const changeTheme=()=>{
        setdarkTheme((prev)=>!prev);
    };

    return(
        <ThemeContext.Provider value={{darkTheme,changeTheme,login}}>
            {children}
        </ThemeContext.Provider>
    );
};