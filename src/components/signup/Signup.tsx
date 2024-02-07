import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import user from "../../images/user.png";
import mail from "../../images/email.png";
import pw from "../../images/password.png";
import Section from "../input section/InputSection";
import { FaUserPlus } from "react-icons/fa6";
import BackButton from "../back button/BackButton";
import ThemeButton from "../theme button/ThemeButton";
import { ThemeContext } from "../../context/ThemeContext";

const Signup = () => {

    const theme = useContext(ThemeContext);

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [userspan, setUserspan] = useState<string>("");
    const [emailspan, setEmailspan] = useState<string>("");
    const [passwordspan, setPasswordspan] = useState<string>("");

    return (
        <div
            className={`w-full h-screen flex flex-col items-center gap-10 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}
        >
            <section
                className={`w-full flex items-start justify-between fixed top-0 py-1 px-2 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}
            >
                <BackButton />
                <ThemeButton />
            </section>

            <form
                method="post"
                className={`w-11/12 flex flex-col items-center justify-center rounded-md py-3 mt-28 ${theme?.darkTheme ? "bg-gray-900 shadow-none" : "bg-white shadow-md shadow-gray-300 "}`}
            >
                <Section
                    src={user}
                    type="text"
                    placeholder="Username"
                    span={userspan}
                />
                <Section
                    src={mail}
                    type="email"
                    placeholder="Email"
                    span={emailspan}
                />
                <Section
                    src={pw}
                    type="password"
                    placeholder="Password"
                    span={passwordspan}
                />
                <button
                    type="submit"
                    className={`w-28 h-9 flex items-center justify-evenly text-white rounded-lg text-lg my-3  ${theme?.darkTheme ? "bg-gray-800 hover:bg-gray-600" : "bg-blue-600  shadow-md shadow-gray-300 hover:bg-white hover:text-blue-600"}`}
                >
                    Sign Up
                    <FaUserPlus
                        className="w-5 h-5"
                    />
                </button>

                <span className="text-gray-400">
                    OR
                </span>

                <Link
                    to="/login"
                    className="text-blue-500 text-lg font-semibold"
                >
                    Login
                </Link>
            </form>
        </div>
    );
};

export default Signup;