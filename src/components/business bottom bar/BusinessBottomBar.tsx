import BottomBarContainer from '../bottom bar container/BottomBarContainer'
import NavigationLinks from '../navigation links/NavigationLinks';
import { IoHomeOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";

const BusinessBottomBar = () => {
    return (
        <BottomBarContainer>
            <NavigationLinks
                to="/business-dashboard/home"
                children={<IoHomeOutline />}
            />
            <NavigationLinks
                to="/business-dashboard/account"
                children={<RiAccountCircleLine />}
            />
        </BottomBarContainer>
    );
};

export default BusinessBottomBar;