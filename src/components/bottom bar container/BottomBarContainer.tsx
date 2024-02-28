import React, { ReactNode, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

type Props={
    children:ReactNode;
};

const BottomBarContainer = ({children}:Props) => {

    const theme=useContext(ThemeContext);

    return (
        <div
            className={`w-full h-12 fixed bottom-0 flex items-center justify-between  px-2 ${theme?.darkTheme ? "bg-black text-white" : "bg-white text-black"}`}
        >
            {children}
        </div>
    );
};

export default BottomBarContainer;