import { ReactNode, createContext, useEffect, useState } from "react";
import { userAuthStatus } from "../helpers/customerApiCommunicator";
import { businessAuthStatus } from "../helpers/businessApiCommunicator";

type User = {
    name: string;
    email: string;
};

type Theme = {
    user: User;
    business:User;
    isLoggedIn: boolean;
    isBusinessLoggedIn:boolean;
    darkTheme: boolean;
    changeTheme: () => void;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    setBusiness:React.Dispatch<React.SetStateAction<User>>;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setIsBusinessLoggedIn:React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User>({ name: "", email: "" });
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const [business,setBusiness]=useState<User>({name:"",email:""});
    const [isBusinessLoggedIn,setIsBusinessLoggedIn]=useState<boolean>(false);

    useEffect(() => {
        const auth = async () => {
            const data=await userAuthStatus();
            if (data === "Unable to authenticate") {
                setUser({ name: "", email: "" });
                setIsLoggedIn(false);
                console.log("User not found");
            }
            else {
                setUser({ name: data?.name, email: data?.email });
                setIsLoggedIn(true);
                console.log("user found");
            }
        };
        auth();
    },[isLoggedIn]);

    useEffect(() => {
        const auth = async () => {
            const data=await businessAuthStatus();
            if (data === "Unable to authenticate") {
                setBusiness({ name: "", email: "" });
                setIsBusinessLoggedIn(false);
                console.log("Business not found");
            }
            else {
                setBusiness({ name: data?.name, email: data?.email });
                setIsBusinessLoggedIn(true);
                console.log("business found");
            }
        };
        auth();
    },[isBusinessLoggedIn]);

    const [darkTheme, setdarkTheme] = useState<boolean>(false);

    const changeTheme = () => {
        setdarkTheme((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ user, business, isLoggedIn, isBusinessLoggedIn, darkTheme, changeTheme, setUser, setBusiness, setIsLoggedIn, setIsBusinessLoggedIn }}>
            {children}
        </ThemeContext.Provider>
    );
};