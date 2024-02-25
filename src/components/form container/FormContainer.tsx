import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {
    children: ReactNode;
    submit: React.FormEventHandler<HTMLFormElement>;
};

const FormContainer = ({ children,submit }: Props) => {

    const theme = useContext(ThemeContext);

    return (
        <form
            method="post"
            className={`w-full flex flex-col items-center justify-center rounded-md py-3 ${theme?.darkTheme ? "bg-gray-900 shadow-none" : "bg-white shadow-md shadow-gray-300 "}`}
            onSubmit={submit}
        >
            {children}
        </form>
    );
};

export default FormContainer;