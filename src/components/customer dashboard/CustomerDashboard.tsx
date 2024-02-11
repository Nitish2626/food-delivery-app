import React from 'react'
import Logo from '../logo/Logo';
import ThemeButton from '../theme button/ThemeButton';
import SearchBar from '../search-bar/SearchBar';

const CustomerDashboard = () => {
    return (
        <div
            className='w-full flex items-center justify-between gap-4 sticky top-0 py-1'
        >
            <Logo />
            <SearchBar />
            <ThemeButton />
        </div>
    );
};

export default CustomerDashboard;