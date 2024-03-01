import { useContext } from "react";
import add from "../../images/add-product.png";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const AddProductButton = () => {

    const theme = useContext(ThemeContext);

    return (
        <Link
            to="/business-dashboard/home/add-product"
            className={`w-36 h-40 flex flex-col items-center justify-center gap-5 text-lg font-semibold rounded-lg mt-3 ${theme?.darkTheme ? "bg-gray-800 text-white shadow-none hover:bg-gray-700" : "shadow-md shadow-gray-300 hover:bg-gray-200 hover:shadow-none"}`}
        >
            <img
                src={add}
                className="w-8 h-8"
                alt="Add Icon"
            />
            Add Product
        </Link>
    );
};

export default AddProductButton;