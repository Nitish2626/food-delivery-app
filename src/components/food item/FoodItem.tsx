import burger from "../../images/burger.png";

const FoodItem = () => {
    return (
        <div className="w-40 flex flex-col px-2 py-2 rounded-lg shadow-md shadow-gray-300">
            <img src={burger} className="w-full h-28"></img>
            <h1 className="text-xl font-semibold text-center">Cheese Burger</h1>

            <section>
                <h2 className="text-lg font-semibold">₹ 100</h2>
            </section>

            <section className="flex items-center gap-2">
                <button className="w-20 rounded-lg text-xl shadow-md shadow-gray-300">
                    Buy
                </button>
                <button className="w-20 text-xl rounded-lg shadow-md shadow-gray-300">
                    Add To Cart
                </button>
            </section>
        </div>
    );
};

export default FoodItem;