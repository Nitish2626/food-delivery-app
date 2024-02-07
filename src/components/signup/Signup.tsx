import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import user from "../../images/user.png";
import mail from "../../images/email.png";
import pw from "../../images/password.png";
import { FaUserPlus } from "react-icons/fa6";
import BackButton from "../back button/BackButton";
import ThemeButton from "../theme button/ThemeButton";
import { ThemeContext } from "../../context/ThemeContext";
import InputSection from "../input section/InputSection";

const Signup = () => {

    const theme = useContext(ThemeContext);

    const userRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const userSpanRef = useRef<React.ReactNode| null>(null);
    const emailSpanRef = useRef<React.ReactNode| null>(null);
    const passwordSpanRef = useRef<React.ReactNode| null>(null);

    const signup=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    };

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
                onSubmit={signup}
            >
                <InputSection
                    reference={userRef}
                    src={user}
                    type="text"
                    placeholder="Username"
                    span={userSpanRef}
                />
                <InputSection
                    reference={emailRef}
                    src={mail}
                    type="email"
                    placeholder="Email"
                    span={emailSpanRef}
                />
                <InputSection
                    reference={passwordRef}
                    src={pw}
                    type="password"
                    placeholder="Password"
                    span={passwordSpanRef}
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