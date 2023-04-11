import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobDetail from '../../JobDetail/JobDetail';

const JobDetails = () => {
    const { jobId } = useParams();
    // console.log(jobId);

    const [job, setJob] = useState({});
    // console.log(job);

    useEffect(() => {
        const jobsData = async () => {
            const res = await fetch("/featuredJobs.json");
            const jobs = await res.json();
            const singleJob = jobs.find(job => job.id === parseInt(jobId))
            setJob(singleJob);
        };
        jobsData();
    }, []);

    return (
        <div className='relative'>
            <h2 className='text-[#1A1919] text-2xl font-bold text-center my-5 underline underline-offset-4'>Job Details</h2>

            <div>
                <JobDetail
                    job={job}
                />
            </div>
        </div>
    );
};

export default JobDetails;