import { useContext } from "react";
import { MdLogin } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";

const LoginButtons = () => {

    const theme=useContext(ThemeContext);

    return (
        <button
            type="submit"
            className={`w-28 h-9 flex items-center justify-evenly text-white rounded-lg text-lg my-3  ${theme?.darkTheme ? "bg-gray-800 hover:bg-gray-700" : "bg-blue-600  shadow-md shadow-gray-300 hover:bg-white hover:text-blue-600"}`}
        >
            Login
            <MdLogin
                className="w-6 h-6"
            />
        </button>
    );
};

export default LoginButtons;