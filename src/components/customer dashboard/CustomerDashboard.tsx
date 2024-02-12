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

const CustomerDashboard = () => {

    const theme = useContext(ThemeContext);
    const foodItems = [
        { src: pizza, name: "Pizza" },
        { src: burger, name: "Burger" }, 
        { src: paneer, name: "Matar Paneer" },   
        { src: chicken, name: "Chicken" },
        { src: biryani, name: "Biryani" },
        { src: curry, name: "Egg Curry" },
        { src: idli, name: "Idli" },
        { src: dosa, name: "Dosa" },
        { src: iceCream, name: "Ice-Cream" },
    ];

    return (
        <div>
            <section
                className={`w-full flex items-center justify-between gap-4 sticky top-0 py-1 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}
            >
                <Logo />
                <SearchBar />
                <ThemeButton />
            </section>

            <section>
                <h1>Categories</h1>
                <section className='w-full flex items-center overflow-auto gap-10 px-2 no-scrollbar'>
                    {foodItems.map((f, i) => (
                        <FoodCategory
                            key={i}
                            name={f.name}
                            src={f.src}
                        />
                    ))}
                </section>
            </section>
        </div>
    );
};

export default CustomerDashboard;