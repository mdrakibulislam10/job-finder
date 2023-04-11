import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import bannerBgImg from "../../assets/All Images/Rectangle 1.png";

const NavBanner = () => {
    return (
        <>
            <div className='relative z-20'>
                <NavMenu />
            </div>

            <img className='w-full z-10 absolute top-0 h-80 md:h-60' src={bannerBgImg} alt="" />
        </>
    );
};

export default NavBanner;