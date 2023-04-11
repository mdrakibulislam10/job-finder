import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../../utilities/fakedb';
import DropDown from '../../DropDown/DropDown';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    // console.log(jobs);

    const [appliedJobs, setAppliedJob] = useState([]);

    useEffect(() => {
        const storedJobs = getShoppingCart();
        // console.log(storedJobs);
        const newJob = [];
        for (const id in storedJobs) {
            const storedJob = jobs.find(job => job.id === parseInt(id));
            if (storedJob) {
                newJob.push(storedJob)
            };
        };
        setAppliedJob(newJob);
    }, []);

    return (
        <section className='px-1 md:px-5 lg:px-40'>
            <h2 className='text-[#1A1919] text-2xl font-bold text-center my-2 lg:my-5 underline underline-offset-8'>Applied Jobs</h2>

            <div className='flex justify-end'>
                <DropDown />
            </div>

            <div className='flex flex-col gap-1 md:gap-5 my-28'>
                {
                    appliedJobs.map(appliedJob =>
                        <AppliedJob
                            key={appliedJob.id}
                            appliedJob={appliedJob}
                        />
                    )
                }
            </div>
        </section>
    );
};

export default AppliedJobs;