import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-600 text-white py-10'>
            <div className='flex flex-col md:flex-row text-center md:text-start gap-4 justify-between items-center px-1 md:px-5 lg:px-40'>
                <div>
                    <h3 className='mb-2 text-2xl font-semibold'>Job Finder</h3>
                    <p>Job Finder is a website for find your dream job.</p>
                </div>
                <p className='text-lg'>&copy;2023 Job Finder. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;