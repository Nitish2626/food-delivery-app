import { useState } from "react";
import Button from "../user type buttons/Button";
import customer from "../../images/customer.png";
import business from "../../images/business.png";
import CustomerSignup from "../customer signup/CustomerSignup";
import ContainerLoginSignup from "../login and signup container/ContainerLoginSignup";
import TopBarLoginSignup from "../login and signup topbar/TopBarLoginSignup";
import HeadingLoginSignup from "../heading login signup/HeadingLoginSignup";


const Signup = () => {

    const [customerButtonClick, setCustomerButtonClick] = useState<boolean>(false);
    const [businessButtonClick, setBusinessButtonClick] = useState<boolean>(false);

    return (
        <ContainerLoginSignup>

            <TopBarLoginSignup />

            <HeadingLoginSignup 
                text="Signup" 
            />

            <section
                className="w-full flex items-center justify-between mt-5 px-2"
            >
                <Button
                    to="/signup"
                    src={customer}
                    text="Customer"
                    prevClick={setBusinessButtonClick}
                    click={setCustomerButtonClick}
                />
                <Button
                    to="/signup"
                    src={business}
                    text="Business"
                    prevClick={setCustomerButtonClick}
                    click={setBusinessButtonClick}
                />
            </section>

            <section
                className="w-full px-2"
            >
                {customerButtonClick && <CustomerSignup />}
                {businessButtonClick && <CustomerSignup />}
            </section>

        </ContainerLoginSignup>
    );
};

export default Signup;
