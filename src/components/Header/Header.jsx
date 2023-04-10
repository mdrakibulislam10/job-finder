import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
            <ActiveLink to={"/"}>Home</ActiveLink>
            <ActiveLink to={"/statistics"}>Statistics</ActiveLink>
            <ActiveLink to={"/applied/jobs"}>Applied Jobs</ActiveLink>
            <ActiveLink to={"/blog"}>Blog</ActiveLink>
        </div>
    );
};

export default Header;