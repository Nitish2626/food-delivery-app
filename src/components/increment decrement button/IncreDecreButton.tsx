import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

type Props={
    disabled:boolean;
    value:string;
    click:()=>void;

};

const IncreDecreButton = ({disabled,value,click}:Props) => {

    const theme=useContext(ThemeContext);
        
    return (
        <button
            disabled={disabled}
            className={`w-7 h-7 px-1 py-0 flex items-center justify-center text-xl rounded-full disabled:opacity-20 ${theme?.darkTheme ? "text-white shadow-none hover:bg-gray-700" : "text-black shadow-md shadow-gray-300 hover:bg-gray-200"}`}
            onClick={click}
        >
            {value}
        </button>
    );
};

export default IncreDecreButton;