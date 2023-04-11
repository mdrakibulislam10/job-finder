import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <header className='md:flex justify-between items-center bg-[#faf9ff] px-1 py-12 md:px-5 lg:px-40 text-center'>
            <h2 className='text-[#1A1919] text-3xl font-bold'>Job Finder</h2>

            <nav className='flex flex-wrap gap-5 md:gap-10 text-gray-600 justify-center my-8'>
                <ActiveLink to={"/"}>Home</ActiveLink>
                <ActiveLink to={"/statistics"}>Statistics</ActiveLink>
                <ActiveLink to={"/applied/jobs"}>Applied Jobs</ActiveLink>
                <ActiveLink to={"/blogs"}>Blog</ActiveLink>
            </nav>

            <button>Start Applying</button>
        </header>
    );
};

export default Header;