import { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";

type User = {
    name: string;
    email: string;
};

type Theme = {
    user: User;
    isLoggedIn: boolean;
    darkTheme: boolean;
    changeTheme: () => void;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User>({ name: "", email: "" });
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const authStatusUserAndBusiness = async (url: string) => {
            try {
                const res = await axios.get(url, { withCredentials: true });
                const data = await res.data;
                console.log("auth ", res.status, data);

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
            }
            catch (error) {
                console.log("Auth Status API ERROR", error);
                return "Unable to authenticate";
            }
        };
        authStatusUserAndBusiness();
    }, [isLoggedIn]);

    const [darkTheme, setdarkTheme] = useState<boolean>(false);

    const changeTheme = () => {
        setdarkTheme((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ user, isLoggedIn, darkTheme, changeTheme, setUser, setIsLoggedIn }}>
            {children}
        </ThemeContext.Provider>
    );
};