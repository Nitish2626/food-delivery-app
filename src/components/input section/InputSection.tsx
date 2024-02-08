import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {
    reference: React.RefObject<HTMLInputElement>;
    src: string;
    type: string;
    span: React.ReactNode;
    placeholder: string;
};

const InputSection = ({ reference, src, type, span, placeholder }: Props) => {

    const theme=useContext(ThemeContext);

    return (
        <>
            <section className="w-11/12 flex items-center justify-evenly gap-2">
                <img
                    src={src}
                    className="w-6 h-6"
                    alt="Icon"
                />
                <input
                    ref={reference}
                    type={type}
                    className={`w-11/12 h-10 text-xl rounded-md px-2 outline-black ${theme?.darkTheme ? "bg-gray-800 text-white" : "shadow-md shadow-gray-300"}`}
                    placeholder={placeholder}
                    required
                />
            </section>

            <span className="w-full pl-12 text-red-600 mb-4">
                {span}
            </span>
        </>
    );
};

export default InputSection;