import React, { useState } from 'react';
import Banner from '../../Banner/Banner';
import JobCategory from '../../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import Job from '../../Job/Job';

const Home = () => {
    const featuredJobs = useLoaderData();

    const [jobs, setJobs] = useState(featuredJobs.slice(0, 4))

    const seeMoreHandler = () => {
        setJobs(featuredJobs);
    };

    return (
        <>
            <Banner />
            <JobCategory />

            <div className='px-1 md:px-5 lg:px-40 mt-24'>
                <h2 className='text-center text-4xl font-bold'>Featured Jobs</h2>
                <p className='text-center text-[#535252] my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-5'>
                    {
                        jobs.map(job =>
                            <Job
                                job={job}
                                key={job.id}
                            />
                        )
                    }
                </div>
                {
                    jobs.length < 5
                    && <button className='mx-auto block mt-8' onClick={seeMoreHandler}>See All Jobs</button>
                }
            </div>
        </>
    );
};

export default Home;