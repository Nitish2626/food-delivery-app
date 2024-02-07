import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import mail from "../../images/email.png";
import pw from "../../images/password.png";
import Section from "../input section/InputSection";
import { MdLogin } from "react-icons/md";
import BackButton from "../back button/BackButton";
import ThemeButton from "../theme button/ThemeButton";
import { ThemeContext } from "../../context/ThemeContext";
import InputSection from "../input section/InputSection";

const Login = () => {

    const theme = useContext(ThemeContext);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [emailspan, setEmailspan] = useState<string>("");
    const [passwordspan, setPasswordspan] = useState<string>("");

    return (
        <div
            className={`w-full h-screen flex flex-col items-center gap-6 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}
        >
            <section
                className={`w-full flex items-start justify-between fixed top-0 py-1 px-2 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}
            >
                <BackButton />
                <ThemeButton />
            </section>

            <h1 className={`text-lg mt-20 ${theme?.darkTheme ? "text-white" : "text-black"}`}>
                Login as
                <strong className="text-blue-500 mx-1">
                    Customer
                </strong>
                or
                <strong className="text-blue-500 mx-1">
                    Business
                </strong>
            </h1>

            <form
                method="post"
                className={`w-11/12 flex flex-col items-center justify-center rounded-lg py-3 ${theme?.darkTheme ? "bg-gray-900 shadow-none" : "bg-white shadow-md shadow-gray-300 "}`}
            >
                <InputSection
                    src={mail}
                    type="email"
                    placeholder="Email"
                    span={emailspan}
                />
                <InputSection
                    src={pw}
                    type="password"
                    placeholder="Password"
                    span={passwordspan}
                />
                <button
                    type="submit"
                    className={`w-28 h-9 flex items-center justify-evenly text-white rounded-lg text-lg my-3  ${theme?.darkTheme ? "bg-gray-800 hover:bg-gray-700" : "bg-blue-600  shadow-md shadow-gray-300 hover:bg-white hover:text-blue-600"}`}
                >
                    Login
                    <MdLogin
                        className="w-6 h-6"
                    />
                </button>

                <span className="text-gray-400">
                    OR
                </span>

                <Link
                    to="/signup"
                    className="text-blue-500 text-lg font-semibold"
                >
                    Signup
                </Link>
            </form>
        </div>
    );
};

export default Login;