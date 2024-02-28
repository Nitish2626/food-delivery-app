import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { loginBusiness } from "../../helpers/businessApiCommunicator";
import mail from "../../images/email.png";
import pw from "../../images/password.png";
import { MdLogin } from "react-icons/md";
import InputSection from "../input section/InputSection";
import { ThemeContext } from "../../context/ThemeContext";
import FormContainer from "../form container/FormContainer";

const BusinessLogin = () => {

    const navigate = useNavigate();

    const theme = useContext(ThemeContext);

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const [emailSpan, setEmailSpan] = useState<string>("");
    const [passwordSpan, setPasswordSpan] = useState<string>("");

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await loginBusiness(emailRef.current?.value as string, passwordRef.current?.value as string);

        if (res === "Invalid Credentials") {
            setEmailSpan("Invalid Credentials");
            setPasswordSpan("Invalid Credentials");
        }
        else {
            setEmailSpan("");
            setPasswordSpan("");
            if (emailRef.current && passwordRef.current) {
                emailRef.current.value = "";
                passwordRef.current.value = "";
            }
            alert("User Loggedin Successfully");
            navigate("/business-dashboard/home");
        }
    }

    return (
        <FormContainer 
            submit={login}
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
        </FormContainer>
    );
};

export default BusinessLogin;