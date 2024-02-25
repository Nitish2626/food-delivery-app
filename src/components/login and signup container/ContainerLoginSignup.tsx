import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

type Props={
    children:ReactNode;
}

const ContainerLoginSignup = ({children}:Props) => {

    const theme=useContext(ThemeContext);

    return (
        <div
            className={`w-full h-screen flex flex-col items-center gap-2 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}
        >
            {children}
        </div>
    );
};

export default ContainerLoginSignup;