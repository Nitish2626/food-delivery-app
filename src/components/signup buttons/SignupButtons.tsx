import { FaUserPlus } from "react-icons/fa6";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const SignupButtons = () => {

    const theme = useContext(ThemeContext);

    return (
        <button
            type="submit"
            className={`w-28 h-9 flex items-center justify-evenly text-white rounded-lg text-lg mt-6 mb-2 ${theme?.darkTheme ? "bg-gray-800 hover:bg-gray-600" : "bg-blue-600  shadow-md shadow-gray-300 hover:bg-white hover:text-blue-600"}`}
        >
            Sign Up
            <FaUserPlus
                className="w-5 h-5"
            />
        </button>
    );
};

export default SignupButtons;