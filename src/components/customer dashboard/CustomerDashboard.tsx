import Logo from '../logo/Logo';
import ThemeButton from '../theme button/ThemeButton';
import SearchBar from '../search-bar/SearchBar';
import { useContext } from 'react';
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

const CustomerDashboard = () => {

    const theme = useContext(ThemeContext);

    const foodItems = [
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

    return (
        <div>
            <section
                className={`w-full flex items-center justify-between gap-4 sticky top-0 py-1 px-2 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}
            >
                <Logo />
                <SearchBar />
                <ThemeButton />
            </section>

            <section className={`flex items-center gap-2 overflow-auto no-scrollbar py-2 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}>
                {foodItems.map((f, i) => (
                    <FoodCategory
                        key={i}
                        name={f.name}
                        src={f.src}
                    />
                ))}
            </section>

            <section className={`flex items-center gap-4 overflow-auto no-scrollbar px-2 py-2 ${theme?.darkTheme ? "bg-black" : "bg-blue-500"}`}>
                <FoodItem 
                    src={burger}
                    name="Cheese Burger"
                    price={100}
                />
                <FoodItem 
                    src={pizza}
                    name="Cheese Pizza"
                    price={200}
                />
                <FoodItem 
                    src={paneer}
                    name="Matar Paneer"
                    price={200}
                />
                <FoodItem 
                    src={chicken}
                    name="Chicken Curry"
                    price={300}
                />
            </section>
        </div>
    );
};

export default CustomerDashboard;