import React, { useContext, useRef } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const SearchBar = () => {

    const theme=useContext(ThemeContext);
    const searchRef = useRef<HTMLInputElement | null>(null);

    return (
        <input
            type="search"
            ref={searchRef}
            className={`w-8/12 h-8 rounded-md text-lg px-2  ${theme?.darkTheme ? "bg-gray-800 text-white shadow-none outline-none" : "bg-white shadow-md shadow-gray-300 outline-none"} `}
            placeholder="Search"
            title="Search food item">
        </input>
    );
};

export default SearchBar;