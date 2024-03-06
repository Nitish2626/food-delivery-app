import { ReactNode, createContext, useEffect, useState } from "react";
import { authStatus } from "../helpers/customerApiCommunicator";

type User = {
    name: string;
    email: string;
};

type Theme = {
    user: User;
    isLoggedIn: boolean;
    darkTheme: boolean;
    changeTheme: () => void;
    setUser:React.Dispatch<React.SetStateAction<User>>;
    setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User>({name:"",email:""});
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const checkStatus = async () => {
            const data = await authStatus();
            if (data) {
                setUser({ name: data?.name, email: data?.email});
                setIsLoggedIn(true);
                console.log("user found");
            }
            else{
                setUser({name:"",email:""});
                setIsLoggedIn(false);
                console.log("User not found");
            }
        };
        checkStatus();
    }, [isLoggedIn]);

    const [darkTheme, setdarkTheme] = useState<boolean>(false);

    const changeTheme = () => {
        setdarkTheme((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ user, isLoggedIn, darkTheme, changeTheme,setUser,setIsLoggedIn }}>
            {children}
        </ThemeContext.Provider>
    );
};