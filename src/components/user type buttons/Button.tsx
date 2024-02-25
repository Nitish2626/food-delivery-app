import { SetStateAction, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";

type Props = {
    to: string;
    src: string;
    text: string;
    prevClick: React.Dispatch<SetStateAction<boolean>>;
    click: React.Dispatch<SetStateAction<boolean>>;
};

const Button = ({ to, src, text, prevClick, click }: Props) => {

    const theme = useContext(ThemeContext);

    const btnClick = () => {
        prevClick(false);
        click(true);
    };

    return (
        <NavLink
            to={to}
            className={`flex items-center gap-2 px-1 py-1 rounded-md text-lg ${theme?.darkTheme ? "shadow-none text-white bg-gray-800 hover:bg-gray-700" : "shadow-md shadow-gray-300 hover:shadow-none hover:bg-gray-200"}`}
            onClick={btnClick}
        >
            <img
                src={src}
                className="w-10 h-10"
                alt={text}
            />
            {text}
        </NavLink>
    );
};

export default Button;