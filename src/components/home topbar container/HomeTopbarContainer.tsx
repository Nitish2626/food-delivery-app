import { ReactNode, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

type Props={
    children:ReactNode;
};

const HomeTopbarContainer = ({children}:Props) => {

    const theme=useContext(ThemeContext);

    return (
        <section className={`w-full flex items-center justify-between gap-4 sticky top-0 py-1 px-2 ${theme?.darkTheme ? "bg-black" : "bg-white"}`}
        >
            {children}
        </section>
    );
};

export default HomeTopbarContainer;