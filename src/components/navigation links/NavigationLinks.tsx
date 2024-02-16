import { NavLink } from 'react-router-dom';

type Props = {
    to: string;
    children:JSX.Element;
};
const NavigationLinks = ({ to,children }: Props) => {
    return (
        <NavLink
            to={to}
            className={`text-2xl`}
        >
            {children}
        </NavLink>
    );
};

export default NavigationLinks;