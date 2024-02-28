import { useNavigate, Link } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import InputSection from "../input section/InputSection";
import businessman from "../../images/businessman.png";
import mail from "../../images/email.png";
import pw from "../../images/password.png";
import { FaUserPlus } from "react-icons/fa6";
import { signupBusiness } from "../../helpers/businessApiCommunicator";
import { ThemeContext } from "../../context/ThemeContext";
import FormContainer from '../form container/FormContainer';

const BusinessSignup = () => {

    const navigate = useNavigate();

    const theme = useContext(ThemeContext);

    const businessRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const [businessNameSpan, setBusinessNameSpan] = useState<string>("");
    const [emailSpan, setEmailSpan] = useState<string>("");
    const [passwordSpan, setPasswordSpan] = useState<string>("");

    const signup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            businessName: businessRef.current?.value as string,
            email: emailRef.current?.value as string,
            password: passwordRef.current?.value as string,
        };

        if (passwordRef.current) {
            if (passwordRef.current.value.length < 8) {
                setPasswordSpan("Password must be 8 characters long !");
            }
            else {
                setPasswordSpan("");
                const res = await signupBusiness(data);

                if (res === "exists") {
                    setEmailSpan("User already registered Please Login !");
                    await signupBusiness(data);
                }
                else {
                    setEmailSpan("");
                    if (businessRef.current && emailRef.current && passwordRef.current) {
                        businessRef.current.value = "";
                        emailRef.current.value = "";
                        passwordRef.current.value = "";
                    }
                    alert("User Created Successfuly");
                    navigate("/login");
                }
            }
        }
    };


    return (
        <FormContainer
            submit={signup}
        >
            <InputSection
                reference={businessRef}
                src={businessman}
                type="text"
                placeholder="Business Name"
                span={businessNameSpan}
            />
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
                className={`w-28 h-9 flex items-center justify-evenly text-white rounded-lg text-lg mt-6 mb-2 ${theme?.darkTheme ? "bg-gray-800 hover:bg-gray-600" : "bg-blue-600  shadow-md shadow-gray-300 hover:bg-white hover:text-blue-600"}`}
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
        </FormContainer>
    );
};

export default BusinessSignup;