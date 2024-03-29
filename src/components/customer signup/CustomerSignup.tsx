import { useNavigate, Link } from "react-router-dom";
import { useState, useRef } from "react";
import InputSection from "../input section/InputSection";
import user from "../../images/user.png";
import mail from "../../images/email.png";
import pw from "../../images/password.png";
import { signupUser } from "../../helpers/customerApiCommunicator";
import FormContainer from "../form container/FormContainer";
import { FaUserPlus } from "react-icons/fa6";
import ButtonLoginAndSignup from "../login and signup buttons/ButtonLoginAndSignup";

const CustomerSignup = () => {

    const navigate = useNavigate();

    const userRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const [usernameSpan, setUsernameSpan] = useState<string>("");
    const [emailSpan, setEmailSpan] = useState<string>("");
    const [passwordSpan, setPasswordSpan] = useState<string>("");

    const signup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            username: userRef.current?.value as string,
            email: emailRef.current?.value as string,
            password: passwordRef.current?.value as string
        };

        if (passwordRef.current) {
            if (passwordRef.current.value.length < 8) {
                setPasswordSpan("Password must be 8 characters long !");
            }
            else {
                setPasswordSpan("");
                const res = await signupUser(data);

                if (res === "exists") {
                    setEmailSpan("User already registered Please Login !");
                    await signupUser(data);
                }
                else {
                    setEmailSpan("");
                    if (userRef.current && emailRef.current && passwordRef.current) {
                        userRef.current.value = "";
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
                reference={userRef}
                src={user}
                type="text"
                placeholder="Username"
                span={usernameSpan}
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

            <ButtonLoginAndSignup
                text="Signup"
            >
                <FaUserPlus
                    className="w-5 h-5"
                />
            </ButtonLoginAndSignup>

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

export default CustomerSignup;