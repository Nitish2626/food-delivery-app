import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import mail from "../../images/email.png";
import pw from "../../images/password.png";
import { MdLogin } from "react-icons/md";
import BackButton from "../back button/BackButton";
import ThemeButton from "../theme button/ThemeButton";
import { ThemeContext } from "../../context/ThemeContext";
import InputSection from "../input section/InputSection";
import { loginUser } from "../../helpers/apiCommunicator";

const Login = () => {

    const theme = useContext(ThemeContext);

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const [emailSpan, setEmailSpan] = useState<string>("");
    const [passwordSpan, setPasswordSpan] = useState<string>("");

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await loginUser(emailRef.current?.value as string, passwordRef.current?.value as string);
        if (res === undefined) {
            setEmailSpan("Invalid Credentials");
            setPasswordSpan("Invalid Credentials");
            await loginUser(emailRef.current?.value as string, passwordRef.current?.value as string);
        }
        else {
            setEmailSpan("");
            setPasswordSpan("");
            if (emailRef.current && passwordRef.current) {
                emailRef.current.value = "";
                passwordRef.current.value = "";
            }
            alert("User Loggedin Successfully");
        }
    };

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
                onSubmit={login}
            >
                <InputSection
                    reference={emailRef}
                    src={mail}
                    type="email"
                    placeholder="Email"
                    span={emailSpan}
                />
                <InputSection
                    reference={passwordRef}
                    src={pw}
                    type="password"
                    placeholder="Password"
                    span={passwordSpan}
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