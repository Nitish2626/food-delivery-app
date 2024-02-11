import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import AuthLink from "../auth link/AuthLink";
import ThemeButton from "../theme button/ThemeButton";
import Logo from "../logo/Logo";

const NavigationBar = () => {

    const theme = useContext(ThemeContext);

    return (
        <div className={`w-full flex items-center justify-between py-1 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}>

            <Logo />

            <section className="w-full flex items-center justify-end gap-3 pr-2">
                <ThemeButton />
                <AuthLink 
                    to="/login"
                    text="Login"
                />
                <AuthLink
                    to="/signup"
                    text="Signup"
                />
            </section>

        </div>
    );
};

export default NavigationBar;