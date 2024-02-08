import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {
    id: string;
    src: string;
    change:(e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = ({ id, src, change }: Props) => {

    const theme = useContext(ThemeContext);

    return (
        <section
            className={`w-28 flex items-center gap-2 rounded-lg pl-1 py-1 ${theme?.darkTheme ? "bg-gray-800 text-white" : "shadow-md shadow-gray-300"}`}
        >
            <input
                type="radio"
                id={id}
                name="type"
                value={id}
                onChange={change}
                required
            />
            <label
                className="flex flex-col items-center justify-center gap-2 text-lg"
            >
                {id}
                <img
                    src={src}
                    className="w-10 h-10"
                    alt={id}
                />
            </label>
        </section>
    );
};

export default RadioButton;