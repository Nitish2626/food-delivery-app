import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";


type Props = {
  to: string;
  text: string;
};

const AuthLink = ({ to, text }: Props) => {

  const theme = useContext(ThemeContext);

  return (
    <Link
      to={to}
      className={`text-lg rounded-md px-2 shadow-md  py-1 ${theme?.darkTheme ? "bg-black text-white shadow-none hover:text-gray-300" : "bg-white shadow-gray-300 hover:text-gray-400"}`}
      >
      {text}
    </Link>
  );
};

export default AuthLink;
