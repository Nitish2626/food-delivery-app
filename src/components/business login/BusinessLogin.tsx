import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { loginBusiness } from "../../helpers/businessApiCommunicator";
import mail from "../../images/email.png";
import pw from "../../images/password.png";
import InputSection from "../input section/InputSection";
import FormContainer from "../form container/FormContainer";
import { MdLogin } from "react-icons/md";
import ButtonLoginAndSignup from "../login and signup buttons/ButtonLoginAndSignup";

const BusinessLogin = () => {

    const navigate = useNavigate();

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

            <ButtonLoginAndSignup
                text="Login"
            >
                <MdLogin
                    className="w-6 h-6"
                />
            </ButtonLoginAndSignup>

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