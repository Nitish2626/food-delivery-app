import logo from "../../images/logo.png";
import dark from "../../images/dark-theme.png";
import light from "../../images/light-theme.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../button/Button";

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
                <button
                    className={`w-7 h-7 flex items-center justify-center rounded-full shadow-md  ${theme?.darkTheme ? "bg-black shadow-none hover:bg-gray-700" : "bg-white shadow-gray-300 hover:bg-gray-300"}`}
                    onClick={theme?.changeTheme}>

                    <img
                        src={theme?.darkTheme ? light : dark}
                        className={`w-5 h-5 ${theme?.darkTheme ? "invert" : ""}`}
                        alt={theme?.darkTheme ? "Light Theme" : "Dark Theme"}
                        title={theme?.darkTheme ? "Light Theme" : "Dark Theme"}
                    />

                </button>

                <Button
                    text="Login"
                />

                <Button
                    text="Signup"
                />
            </section>

        </div>
    );
};

export default NavigationBar;