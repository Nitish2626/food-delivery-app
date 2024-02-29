import { useContext } from "react";
import BackButton from "../back button/BackButton";
import ThemeButton from "../theme button/ThemeButton";
import { ThemeContext } from "../../context/ThemeContext";

const TopBarLoginSignup = () => {

    const theme=useContext(ThemeContext);

    return (
        <section
            className={`w-full flex items-start justify-between fixed top-0 py-1 px-2 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}
        >
            <BackButton to="/" />
            <ThemeButton />
        </section>
    );
};

export default TopBarLoginSignup;