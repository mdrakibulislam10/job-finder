import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const JobCategory = () => {

    const [jsbCategory, setJobCategory] = useState([]);

    useEffect(() => {
        const loadCategory = async () => {
            const res = await fetch("/category.json");
            const data = await res.json();
            setJobCategory(data);
        };
        loadCategory();
    }, []);

    return (
        <section className='mt-24 px-1 md:px-5 lg:px-40'>
            <h2 className='text-center text-4xl font-bold'>Job Category List</h2>
            <p className='text-center text-[#535252] my-5'>Find your next job in one of these categories</p>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    jsbCategory.map(category =>
                        <Category
                            key={category.id}
                            category={category}
                        />
                    )
                }
            </div>
        </section>
    );
};

export default JobCategory;