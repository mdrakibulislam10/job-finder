import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const marks = useLoaderData();
    // console.log(marks);

    let total = 0;
    for (const mark of marks) {
        total = total + parseInt(mark.marks)
    };
    const avg = total / marks.length;

    return (
        <section className='px-1 md:px-5 lg:px-40 my-8'>
            <h2 className='text-2xl font-semibold'>Assignment Analytics</h2>
            <p className='my-4'>Avg Assignment Mark: <b>{(avg).toFixed(0)}</b></p>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    data={marks}
                >
                    <CartesianGrid strokeDasharray="10 10" fill='#1F1F1F' />
                    <XAxis dataKey="assignmentNumber" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#7393B3" fill="#8A8AFF" />
                </AreaChart>
            </ResponsiveContainer>
        </section>
    );
};

export default Statistics;