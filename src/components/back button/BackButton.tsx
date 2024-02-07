import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const BackButton = () => {

    const theme=useContext(ThemeContext);

    return (
        <Link
            to="/"
            className={`text-xl rounded-md ${theme?.darkTheme ? "shadow-none hover:bg-gray-700" : "shadow-md shadow-gray-200 hover:bg-gray-300"}`}
        >
            <MdOutlineKeyboardBackspace
                className={`w-7 h-7 ${theme?.darkTheme ? "invert" : ""}`}
            />
        </Link>
    );
};

export default BackButton;