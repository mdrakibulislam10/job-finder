import React from 'react';

const Category = ({ category }) => {

    const { categoryName, categoryJob, categoryImg } = category;

    return (
        <div className='bg-[#f9f8ff] p-10'>
            <img className='w-16 h-16 p-1 rounded bg-[#efecff]' src={categoryImg} alt="" />
            <h3 className='font-semibold text-xl mt-6 mb-2'>{categoryName}</h3>
            <p className='text-[#535252]'>{categoryJob}</p>
        </div>
    );
};

export default Category;