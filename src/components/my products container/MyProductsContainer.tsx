import { useContext } from "react";
import products from "../../images/products.png";
import { ThemeContext } from "../../context/ThemeContext";
import AddProductButton from "../add product button/AddProductButton";

const MyProductsContainer = () => {

    const theme = useContext(ThemeContext);

    return (
        <div
            className={`py-2 ${theme?.darkTheme ? "bg-black text-white" : "bg-white"}`}
        >
            <section
                className={`w-full flex items-center gap-2 px-1`}
            >
                <img
                    src={products}
                    className="w-8 h-8"
                />
                <h1
                    className={`text-lg font-semibold`}
                >
                    My Products
                </h1>
            </section>

            <section className="px-1">
                <AddProductButton />
            </section>
        </div>
    );
};

export default MyProductsContainer;