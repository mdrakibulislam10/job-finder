import React from 'react';
import bannerImg from "../../../src/assets/All Images/P3OLGJ1 copy 1.png"

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center bg-[#faf9ff] px-1 md:px-5 lg:px-40'>
            <div className='w-full'>
                <h2 className='text-[#1A1919] text-4xl md:text-6xl font-bold'>One Step <br />
                    Closer To Your <br />
                    <span className='text-purple-700'>Dream Job</span></h2>

                <p className='my-3 text-[#535252]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                <button>Get Started</button>
            </div>

            <div className='w-full'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;