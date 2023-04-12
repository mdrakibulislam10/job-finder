import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import NavBanner from '../../NavBanner/NavBanner';
import { StarIcon } from '@heroicons/react/24/solid';

const Statistics = () => {
    const marks = useLoaderData();

    const total = marks.reduce((previous, current) => previous + parseInt(current.mark), 0);
    const avg = total / marks.length;

    return (
        <>
            <NavBanner />

            <h2 className='text-gray-600 text-2xl font-bold text-center my-9 -mt-2 pb-12 relative z-20'>Student Analytics</h2>

            <section className='px-1 md:px-5 lg:px-40 my-8'>
                <h2 className='text-2xl font-semibold'>Assignment Analytics</h2>
                <p className='my-4 flex items-center gap-1'>
                    <StarIcon className="h-8 w-8 text-yellow-600" />
                    Avg Assignment Mark: <b className='text-xl'>{(avg).toFixed(0)}</b></p>
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                        data={marks}
                    >
                        <CartesianGrid strokeDasharray="10 10" />
                        <XAxis dataKey="assignmentName" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="mark" stroke="#7393B3" fill="#8A8AFF" />
                    </AreaChart>
                </ResponsiveContainer>
            </section>
        </>
    );
};

export default Statistics;