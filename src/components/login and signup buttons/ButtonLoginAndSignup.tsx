import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {
    text: string;
    children: ReactNode;
};

const ButtonLoginAndSignup = ({ text, children }: Props) => {

    const theme = useContext(ThemeContext);

    return (
        <button
            type="submit"
            className={`w-28 h-9 flex items-center justify-evenly text-white rounded-lg text-lg my-3  ${theme?.darkTheme ? "bg-gray-800 hover:bg-gray-700" : "bg-blue-600  shadow-md shadow-gray-300 hover:bg-white hover:text-blue-600"}`}
        >
            {text}
            {children}
        </button>
    );
};

export default ButtonLoginAndSignup;