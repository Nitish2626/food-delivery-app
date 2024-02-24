import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import BackButton from "../back button/BackButton";
import ThemeButton from "../theme button/ThemeButton";
import Button from "../user type buttons/Button";
import customer from "../../images/customer.png";
import business from "../../images/business.png";
import CustomerLogin from "../customer login/CustomerLogin";
import BusinessLogin from "../business login/BusinessLogin";

const Login = () => {

    const theme = useContext(ThemeContext);

    const [customerButtonClick, setCustomerButtonClick] = useState<boolean>(false);
    const [businessButtonClick, setBusinessButtonClick] = useState<boolean>(false);

    return (
        <div
            className={`w-full h-screen flex flex-col items-center gap-2 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}
        >
            <section
                className={`w-full flex items-start justify-between fixed top-0 py-1 px-2 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}
            >
                <BackButton />
                <ThemeButton />
            </section>

            <section
                className="flex items-center justify-center gap-3 mt-20"
            >
                <Button
                    to="/login"
                    src={customer}
                    text="Customer"
                    prevClick={setBusinessButtonClick}
                    click={setCustomerButtonClick}
                />
                <Button
                    to="/login"
                    src={business}
                    text="Business"
                    prevClick={setCustomerButtonClick}
                    click={setBusinessButtonClick}
                />
            </section>

            <section
                className="w-full px-2"
            >
                {customerButtonClick && <CustomerLogin />}
                {businessButtonClick && <BusinessLogin />}
            </section>
        </div>
    );
};

export default Login;