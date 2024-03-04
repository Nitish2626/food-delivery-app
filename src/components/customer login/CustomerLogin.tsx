import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { loginUser } from "../../helpers/customerApiCommunicator";
import mail from "../../images/email.png";
import pw from "../../images/password.png";
import InputSection from "../input section/InputSection";
import FormContainer from "../form container/FormContainer";
import { MdLogin } from "react-icons/md";
import ButtonLoginAndSignup from "../login and signup buttons/ButtonLoginAndSignup";
import { ThemeContext } from "../../context/ThemeContext";

const CustomerLogin = () => {

    const navigate = useNavigate();
    const theme=useContext(ThemeContext);

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const [emailSpan, setEmailSpan] = useState<string>("");
    const [passwordSpan, setPasswordSpan] = useState<string>("");

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await loginUser(emailRef.current?.value as string, passwordRef.current?.value as string);

        if (res === "Invalid Credentials") {
            setEmailSpan("Invalid Credentials");
            setPasswordSpan("Invalid Credentials");
            // theme?.login(emailRef.current?.value as string, passwordRef.current?.value as string);
        }
        else {
            theme?.setUser({name:res?.name,email:res?.email});
            theme?.setIsLoggedIn(true);
            setEmailSpan("");
            setPasswordSpan("");
            if (emailRef.current && passwordRef.current) {
                emailRef.current.value = "";
                passwordRef.current.value = "";
            }
            alert("User Loggedin Successfully");
            navigate("/customer-dashboard/home");
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

export default CustomerLogin;