import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobDetail from '../../JobDetail/JobDetail';
import NavBanner from '../../NavBanner/NavBanner';

const JobDetails = () => {
    const { jobId } = useParams();
    // console.log(jobId);

    const [job, setJob] = useState({});
    // console.log(job);

    useEffect(() => {
        const loadJobsData = async () => {
            const res = await fetch("/featuredJobs.json");
            const jobs = await res.json();
            const selectedJob = jobs.find(job => job.id === parseInt(jobId))
            setJob(selectedJob);
        };
        loadJobsData();
    }, []);

    return (
        <>
            <NavBanner />

            <h2 className='text-[#1A1919] text-2xl font-bold text-center my-9 -mt-2 pb-12 relative z-20'>Job Details</h2>

            <div>
                <div className='px-1 md:px-5 lg:px-40 my-6 lg:my-20'>
                    <JobDetail
                        job={job}
                    />
                </div>
            </div>
        </>
    );
};

export default JobDetails;