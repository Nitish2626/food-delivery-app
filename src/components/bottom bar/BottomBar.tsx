import NavigationLinks from '../navigation links/NavigationLinks';
import { IoHomeOutline } from "react-icons/io5";
import { BiPurchaseTag } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";

const BottomBar = () => {
    return (
        <div className={`w-full h-10 fixed bottom-0 flex items-center justify-between px-2 bg-blue-500`}>
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