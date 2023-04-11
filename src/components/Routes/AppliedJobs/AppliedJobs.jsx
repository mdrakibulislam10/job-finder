import React, { useEffect, useState } from 'react';
import { getAppliedJobs } from '../../../utilities/fakedb';
import DropDown from '../../DropDown/DropDown';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../../AppliedJob/AppliedJob';
import NavBanner from '../../NavBanner/NavBanner';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    // console.log(jobs);

    const [appliedJobs, setAppliedJob] = useState([]);
    const [appliedJobs2, setAppliedJob2] = useState([]);

    useEffect(() => {
        const storedJobs = getAppliedJobs();
        // console.log(storedJobs);
        const newJob = [];
        for (const id in storedJobs) {
            const storedJob = jobs.find(job => job.id === parseInt(id));
            if (storedJob) {
                newJob.push(storedJob)
            };
        };
        setAppliedJob(newJob);
        setAppliedJob2(newJob);
    }, []);

    // pick Remote Job
    const pickRemoteJob = () => {
        const remoteJob = appliedJobs2.filter(job => job.remoteOrOnsite === "Remote");
        setAppliedJob(remoteJob);
    };

    // pick Onsite Job
    const pickOnsiteJob = () => {
        const onsiteJob = appliedJobs2.filter(job => job.remoteOrOnsite === "Onsite");
        setAppliedJob(onsiteJob);
    };

    return (
        <>
            <NavBanner />

            <h2 className='text-[#1A1919] text-2xl font-bold text-center my-9 -mt-2 pb-12 relative z-20'>Applied Jobs</h2>

            <section className='px-1 md:px-5 lg:px-40'>
                <div className='flex justify-end'>
                    <DropDown
                        pickRemoteJob={pickRemoteJob}
                        pickOnsiteJob={pickOnsiteJob}
                    />
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
        </>
    );
};

export default AppliedJobs;