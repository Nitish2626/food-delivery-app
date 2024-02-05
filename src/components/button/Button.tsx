import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


type Props={
    text:string;
};

const Button = ({text}:Props) => {

    const theme=useContext(ThemeContext);

  return (
    <button className={`text-lg rounded-md px-2 shadow-md  py-1 ${theme?.darkTheme ? "bg-black text-white shadow-none hover:text-gray-300" : "bg-white shadow-gray-300 hover:text-gray-400"}`}>
        {text}
    </button>
  );
};

export default Button;
