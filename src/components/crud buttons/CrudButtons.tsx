import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {
    bg: string;
    hover: string
    children: ReactNode;
};

const CrudButtons = ({ bg, hover, children }: Props) => {

    const theme = useContext(ThemeContext);

    return (
        <button
            type="submit"
            className={`w-16 flex items-center justify-center ${bg} rounded-lg py-1 ${hover}`}
        >
            {children}
        </button>
    );
};

export default CrudButtons;