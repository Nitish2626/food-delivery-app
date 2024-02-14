import { useState } from "react";
import burger from "../../images/burger.png";
import cart from "../../images/cart.png";

const FoodItem = () => {

    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className="w-44 flex flex-col px-2 py-3 rounded-lg shadow-md shadow-gray-300">
            <img
                src={burger}
                className="w-full h-28"
            />
            <h1
                className="text-xl font-semibold text-center"
            >
                Cheese Burger
            </h1>

            <section className="flex items-center justify-between">
                <h2
                    className="text-lg font-semibold"
                >
                    ₹ {100 * quantity}
                </h2>
                <section
                    className="flex items-center px-2 py-1"
                >
                    <button
                        disabled={quantity==1 ? true : false} 
                        className="text-xl shadow-md shadow-gray-300 rounded-full px-2 disabled:opacity-20"
                        onClick={() => setQuantity((prev) => prev - 1)}
                    >
                        -
                    </button>
                    <input
                        type="text"
                        className="w-8 text-lg font-semibold text-center"
                        value={quantity}
                    />
                    <button
                        className="text-xl shadow-md shadow-gray-300 rounded-full px-1"
                        onClick={() => setQuantity((prev) => prev + 1)}
                    >
                        +
                    </button>
                </section>
            </section>

            <section className="flex items-center justify-between mt-1">
                <button className="rounded-md text-xl py-3 text-blue-400 shadow-md shadow-gray-300 px-3">
                    Buy
                </button>
                <button className="flex items-center justify-center rounded-md shadow-md shadow-gray-300 py-1 px-2">
                    <img src={cart} className="w-10 h-10"></img>
                </button>
            </section>
        </div>
    );
};

export default FoodItem;