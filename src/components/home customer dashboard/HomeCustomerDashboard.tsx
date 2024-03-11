import Logo from '../logo/Logo';
import ThemeButton from '../theme button/ThemeButton';
import SearchBar from '../search-bar/SearchBar';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import FoodCategory from '../food category list/FoodCategory';
import burger from "../../images/burger.png";
import chicken from "../../images/chicken.png";
import pizza from "../../images/pizza.png";
import biryani from "../../images/biryani.png";
import curry from "../../images/egg-curry.png";
import idli from "../../images/idli.png";
import dosa from "../../images/dosa.png";
import paneer from "../../images/paneer.png";
import iceCream from "../../images/ice-cream.png";
import FoodItem from '../food item/FoodItem';
import BottomBar from '../customer bottom bar/CustomerBottomBar';
import HomeTopbarContainer from '../home topbar container/HomeTopbarContainer';
import { getFood } from '../../helpers/businessApiCommunicator';

type Objects = {
    foodName: string;
    foodImage: string;
    foodPrice: number;
    foodDiscount: Number;
    ownerName: string;
};

const HomeCustomerDashboard = () => {

    const theme = useContext(ThemeContext);
    console.log("app", theme?.user);

    const foodCategory = [
        { src: pizza, name: "Pizza" },
        { src: burger, name: "Burger" },
        { src: paneer, name: "Paneer" },
        { src: chicken, name: "Chicken" },
        { src: biryani, name: "Biryani" },
        { src: curry, name: "Curry" },
        { src: idli, name: "Idli" },
        { src: dosa, name: "Dosa" },
        { src: iceCream, name: "Cream" },
    ];

    const [foodItems, setFoodItems] = useState<Objects[]>([]);

    const getFoodItems = async () => {
        const items = await getFood();
        if (items === false) {
            alert("Something went wrong");
        }
        else {
            setFoodItems(items);
        }
    };

    useEffect(() => {
        getFoodItems();
    }, [foodItems.length]);

    console.log(foodItems);

    return (
        <div>
            <HomeTopbarContainer>
                <Logo />
                <SearchBar />
                <ThemeButton />
            </HomeTopbarContainer>

            <section className={`flex items-center gap-2 overflow-auto no-scrollbar py-2 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}>
                {foodCategory.map((f, i) =>
                    <FoodCategory
                        key={i}
                        name={f.name}
                        src={f.src}
                    />
                )}
            </section>

            <section className={`w-full flex items-center gap-4 overflow-auto no-scrollbar px-2 py-2 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}>
                {foodItems.map((d, i) => {
                    return <FoodItem
                        key={i}
                        src={d.foodImage}
                        name={d.foodName}
                        price={d.foodPrice}
                        ownerName={d.ownerName}
                    />
                })}
            </section>
            <BottomBar />
        </div>
    );
};

export default HomeCustomerDashboard;