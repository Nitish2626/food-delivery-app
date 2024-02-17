import { NavLink } from 'react-router-dom';

type Props = {
    to: string;
    children:JSX.Element;
};
const NavigationLinks = ({ to,children }: Props) => {

    return (
        <NavLink
            to={to}
            className={`flex items-center justify-center text-2xl rounded-full px-1 py-1`}
        >
            {children}
        </NavLink>
    );
};

export default NavigationLinks;