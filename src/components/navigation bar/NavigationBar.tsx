import logo from "../../images/logo.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import AuthLink from "../auth link/AuthLink";
import ThemeButton from "../theme button/ThemeButton";

const NavigationBar = () => {

    const theme = useContext(ThemeContext);

    return (
        <div className={`w-full flex items-center justify-between py-1 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}>

            <section className="w-20 flex items-center justify-center">
                <img
                    src={logo}
                    className='w-10 h-10'
                    alt='Logo'
                    title="Logo"
                />
            </section >

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