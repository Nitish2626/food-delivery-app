import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

type Props = {
  src: string;
  name: string;
};

const FoodCategory = ({ src, name }: Props) => {

  const theme = useContext(ThemeContext);

  return (
    <button
      className={`flex items-center justify-center gap-2 text-lg rounded-lg mx-2 px-10 py-1  ${theme?.darkTheme ? "text-white bg-gray-800 shadow-none hover:bg-gray-700" : "shadow-md shadow-gray-300 hover:bg-gray-200 hover:shadow-none"}`}
    >
      <img
        src={src}
        className="w-10 h-10"
        alt={name}
        title={name}
      />
        {name}
    </button>
  );
};

export default FoodCategory;