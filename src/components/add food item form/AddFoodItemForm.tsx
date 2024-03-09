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
import CrudButtons from '../crud buttons/CrudButtons';
import { IoMdAdd } from "react-icons/io";
import { addFood } from '../../helpers/businessApiCommunicator';

const AddFoodItemForm = () => {

    const foodNameRef = useRef<HTMLInputElement | null>(null);
    const foodImageRef = useRef<HTMLInputElement | null>(null);
    const foodPriceRef = useRef<HTMLInputElement | null>(null);
    const foodDiscountPriceRef = useRef<HTMLInputElement | null>(null);

    const addFoodItem = async (e: React.FormEvent<HTMLFormElement>) => {
        const foodPrice = Number(foodPriceRef.current?.value);
        const discountPrice = Number(foodDiscountPriceRef.current?.value);

        e.preventDefault();
        const add = await addFood(foodNameRef.current?.value as string, foodImageRef.current?.value as string, foodPrice, discountPrice);
        if (add==="error") {
            alert("Unable to add food item");
        }
        else{
            if (foodNameRef.current && foodImageRef.current && foodPriceRef.current && foodDiscountPriceRef.current) {
                foodNameRef.current.value = "";
                foodImageRef.current.value = "";
                foodPriceRef.current.value = "";
                foodDiscountPriceRef.current.value = "";
            }
            alert("Food item added successfully");
        }
    };

    return (
        <ContainerLoginSignup>
            <HomeTopbarContainer>
                <BackButton
                    to="/business-dashboard/home"
                />
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
                <CrudButtons
                    bg="bg-green-600"
                    hover="hover:bg-green-700"
                >
                    <IoMdAdd
                        className='w-7 h-7 text-white'
                    />
                </CrudButtons>
            </FormContainer>
        </ContainerLoginSignup>
    );
};

export default AddFoodItemForm;