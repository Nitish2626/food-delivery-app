import { useState } from "react";
import Button from "../user type buttons/Button";
import customer from "../../images/customer.png";
import business from "../../images/business.png";
import CustomerLogin from "../customer login/CustomerLogin";
import BusinessLogin from "../business login/BusinessLogin";
import ContainerLoginSignup from "../login and signup container/ContainerLoginSignup";
import TopBarLoginSignup from "../login and signup topbar/TopBarLoginSignup";
import HeadingLoginSignup from "../heading login signup/HeadingLoginSignup";

const Login = () => {

    const [customerButtonClick, setCustomerButtonClick] = useState<boolean>(false);
    const [businessButtonClick, setBusinessButtonClick] = useState<boolean>(false);

    return (
        <ContainerLoginSignup >

            <TopBarLoginSignup />

            <HeadingLoginSignup 
                text="Login" 
            />

            <section
                className="w-full flex items-center justify-between mt-5 px-2"
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

        </ContainerLoginSignup>
    );
};

export default Login;