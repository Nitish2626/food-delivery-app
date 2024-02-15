import { useContext, useState } from "react";
import cart from "../../images/cart.png";
import { ThemeContext } from "../../context/ThemeContext";
import IncreDecreButton from "../increment decrement button/IncreDecreButton";

type Props = {
    src: string;
    name: string;
    price: number;
};

const FoodItem = ({ src, name, price }: Props) => {

    const theme = useContext(ThemeContext);

    const [quantity, setQuantity] = useState<number>(1);

    const increment = () => {
        setQuantity((prev) => prev + 1)
    };

    const decrement = () => {
        setQuantity((prev) => prev - 1);
    };

    return (
        <div
            className={`flex flex-col items-center px-2 py-3 rounded-lg ${theme?.darkTheme ? "bg-gray-800 shadow-none" : "bg-white shadow-md shadow-gray-300"}`}
        >
            <img
                src={src}
                className="w-full h-28"
                alt="Food"
            />
            <h1
                className={`text-xl font-semibold text-center ${theme?.darkTheme ? "text-white" : "text-black"}`}
            >
                {name}
            </h1>

            <section className="flex items-center justify-between">
                <h2
                    className={`text-lg font-semibold ${theme?.darkTheme ? "text-white" : "text-black"}`}
                >
                    ₹ {price * quantity}
                </h2>
                <section
                    className="flex items-center px-2 py-2"
                >
                    <IncreDecreButton
                        disabled={quantity === 1 ? true : false}
                        value="-"
                        click={decrement}
                    />
                    <input
                        type="text"
                        className={`w-8 text-lg font-semibold text-center outline-none ${theme?.darkTheme ? "bg-gray-800 text-white" : ""}`}
                        value={quantity}
                        readOnly
                    />
                    <IncreDecreButton
                        disabled={false}
                        value="+"
                        click={increment}
                    />
                </section>
            </section>

            <section
                className="flex items-center justify-between gap-4 mt-1"
            >
                <button
                    className={`w-16 rounded-md text-xl py-3 text-blue-400 px-3 ${theme?.darkTheme ? "bg-gray-700 shadow-none hover:bg-gray-600" : "shadow-md shadow-gray-300 hover:bg-gray-200"}`}
                >
                    Buy
                </button>
                <button
                    className={`w-16 flex items-center justify-center rounded-md py-1 px-2 ${theme?.darkTheme ? "bg-gray-700 hover:bg-gray-600" : "shadow-md shadow-gray-300 hover:bg-gray-200"}`}
                >
                    <img
                        src={cart}
                        className="w-10 h-10"
                        alt="Cart"
                    />
                </button>
            </section>
        </div>
    );
};

export default FoodItem;