import dark from "../../images/dark-theme.png";
import light from "../../images/light-theme.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeButton = () => {

    const theme = useContext(ThemeContext);

    return (
        <button
            className={`w-7 h-7 flex items-center justify-center rounded-full shadow-md  ${theme?.darkTheme ? "bg-black shadow-none hover:bg-gray-700" : "bg-white shadow-gray-200 hover:bg-gray-300"}`}
            onClick={theme?.changeTheme}
        >
            <img
                src={theme?.darkTheme ? light : dark}
                className={`w-5 h-5 ${theme?.darkTheme ? "invert" : ""}`}
                alt={theme?.darkTheme ? "Light Theme" : "Dark Theme"}
                title={theme?.darkTheme ? "Light Theme" : "Dark Theme"}
            />
        </button>
    );
};

export default ThemeButton;