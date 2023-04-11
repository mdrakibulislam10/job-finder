import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';


const Job = ({ job }) => {
    // console.log(job);
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrParttime, location, salary } = job;

    const navigate = useNavigate();

    return (
        <div className='border border-gray-500 rounded-lg p-6'>
            <img className='w-44 h-24 rounded' src={companyLogo} alt="" />
            <h3 className='my-3 font-bold text-xl'>{jobTitle}</h3>
            <p className='text-[#5a5a5a]'>{companyName}</p>
            <div className='my-3 flex gap-3 flex-wrap'>
                <button className='text-purple-700' style={{ background: "transparent", border: "2px solid purple" }}>{remoteOrOnsite}</button>
                <button className='text-purple-700' style={{ background: "transparent", border: "2px solid purple" }}>{fulltimeOrParttime}</button>
            </div>
            <div className='flex gap-3 flex-wrap'>
                <p className='flex'>
                    <MapPinIcon className="h-6 w-6 text-gray-500" />
                    {location}
                </p>
                <p className='flex'>
                    <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                    Salary: {salary}
                </p>
            </div >

            <button onClick={() => navigate(`/job/details/${id}`)} className='mt-3'>View Details</button>
        </div>
    );
};

export default Job;