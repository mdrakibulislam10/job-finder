import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const AppliedJob = ({ appliedJob }) => {
    // console.log(appliedJob);
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrParttime, location, salary } = appliedJob;

    const navigate = useNavigate();

    return (
        <div className='border border-gray-300 rounded-lg p-6 flex flex-wrap items-center'>
            <img className='w-60 h-52 rounded me-1 md:me-8' src={companyLogo} alt="" />
            <div className='flex-grow'>
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
            </div>

            <button onClick={() => navigate(`/job/details/${id}`)} className='mt-3'>View Details</button>
        </div>
    );
};

export default AppliedJob;