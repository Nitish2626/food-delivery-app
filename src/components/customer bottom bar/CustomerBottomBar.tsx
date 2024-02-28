import NavigationLinks from '../navigation links/NavigationLinks';
import { IoHomeOutline } from "react-icons/io5";
import { BiPurchaseTag } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import BottomBarContainer from '../bottom bar container/BottomBarContainer';

const CustomerBottomBar = () => { 
    return (
        <BottomBarContainer>
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
        </BottomBarContainer>
    );
};

export default CustomerBottomBar;