import FormContainer from '../form container/FormContainer';
import HomeTopbarContainer from '../home topbar container/HomeTopbarContainer';
import ThemeButton from '../theme button/ThemeButton';
import BackButton from '../back button/BackButton';
import InputSection from '../input section/InputSection';
import food from "../../images/food-name.png";
import { useRef } from 'react';
import ContainerLoginSignup from '../login and signup container/ContainerLoginSignup';
import HeadingLoginSignup from '../heading login signup/HeadingLoginSignup';
import url from "../../images/url.png";
import price from "../../images/price.png";
import discount from "../../images/discount.png";

const AddFoodItemForm = () => {

    const foodNameRef = useRef<HTMLInputElement | null>(null);
    const foodImageRef=useRef<HTMLInputElement | null>(null);
    const foodPriceRef=useRef<HTMLInputElement | null>(null);
    const foodDiscountPriceRef=useRef<HTMLInputElement | null>(null);

    const addFoodItem = () => {

    };

    return (
        <ContainerLoginSignup>
            <HomeTopbarContainer>
                <BackButton to="/business-dashboard/home" />
                <ThemeButton />
            </HomeTopbarContainer>

            <HeadingLoginSignup
                text="Add Product"
            />

            <FormContainer
                submit={addFoodItem}
            >
                <InputSection
                    reference={foodNameRef}
                    src={food}
                    type='text'
                    placeholder='Food Name'
                />
                <InputSection
                    reference={foodImageRef}
                    src={url}
                    type='text'
                    placeholder='Food Image URL'
                />
                <InputSection
                    reference={foodPriceRef}
                    src={price}
                    type='text'
                    placeholder='Food Price (₹)'
                />
                <InputSection
                    reference={foodDiscountPriceRef}
                    src={discount}
                    type='text'
                    placeholder='Discount on Food (%)'
                />
            </FormContainer>
        </ContainerLoginSignup>
    );
};

export default AddFoodItemForm;