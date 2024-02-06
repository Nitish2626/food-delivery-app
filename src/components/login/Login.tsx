import { Link } from "react-router-dom";
import { useState } from "react";
import mail from "../../images/email.png";
import pw from "../../images/password.png";
import Section from "../section/Section";
import { MdLogin } from "react-icons/md";

const Login = () => {

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [userspan, setUserspan] = useState<string>("");
    const [emailspan, setEmailspan] = useState<string>("");
    const [passwordspan, setPasswordspan] = useState<string>("");

    return (
        <div className="w-full h-screen flex items-center justify-center">

            <form
                method="post"
                className="w-11/12 flex flex-col items-center justify-center rounded-md py-3 shadow-[0px_0px_5px_0px_black]"
            >
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
                    className="w-28 h-9 flex items-center justify-evenly bg-blue-600 text-white rounded-lg text-lg my-3 shadow-[2px_2px_10px_0px_grey] hover:bg-white hover:text-blue-600"
                >
                    Sign Up
                    <MdLogin
                        className="w-6 h-6"
                    />
                </button>

                <span className="my-2 text-gray-400">
                    OR
                </span>

                <Link
                    to="/login"
                    className="text-blue-400 text-lg font-semibold"
                >
                    Login
                </Link>
            </form>
        </div>
    );
};

export default Login;