import NavigationLinks from '../navigation links/NavigationLinks';
import { IoHomeOutline } from "react-icons/io5";
import { BiPurchaseTag } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const BottomBar = () => {

    const theme = useContext(ThemeContext);

    return (
        <div
            className={`w-full h-12 fixed bottom-0 flex items-center justify-between  px-2 ${theme?.darkTheme ? "bg-black text-white" : "bg-white text-black"}`}
        >
            <NavigationLinks
                to="/customer-dashboard/home"
                children={<IoHomeOutline />}
            />
            <NavigationLinks
                to="/customer-dashboard/orders"
                children={<BiPurchaseTag />}
            />
            <NavigationLinks
                to="/customer-dashboard/cart"
                children={<IoCartOutline />}
            />
            <NavigationLinks
                to="/customer-dashboard/account"
                children={<RiAccountCircleLine />}
            />
        </div>
    );
};

export default BottomBar;