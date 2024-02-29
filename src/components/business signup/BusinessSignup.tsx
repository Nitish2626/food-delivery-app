import { useNavigate, Link } from "react-router-dom";
import { useState, useRef } from "react";
import InputSection from "../input section/InputSection";
import businessman from "../../images/businessman.png";
import mail from "../../images/email.png";
import pw from "../../images/password.png";
import { signupBusiness } from "../../helpers/businessApiCommunicator";

import FormContainer from '../form container/FormContainer';
import SignupButtons from "../signup buttons/SignupButtons";

const BusinessSignup = () => {

    const navigate = useNavigate();

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

            <SignupButtons />

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