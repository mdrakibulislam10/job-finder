import React from 'react';
import { CalendarDaysIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../utilities/fakedb';

const JobDetail = ({ job }) => {
    // console.log(job);
    const { id, jobDescription, jobResponsibility, educationalRequirements, experiences, salary, location, jobTitle, contactInformation } = job;

    const addDetailsToDb = id => {
        addToDb(id);
    };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
            <div className='lg:col-span-2 text-lg'>
                <p><b>Job Description:</b> {jobDescription}</p>
                <p className='my-4'><b>Job Responsibility:</b> {jobResponsibility}</p>
                <p>
                    <b>Educational Requirements:</b> <br />
                    {educationalRequirements}
                </p>
                <p className='mt-4'>
                    <b>Experiences:</b> <br />
                    {experiences}
                </p>
            </div>

            <div className='lg:col-span-1'>
                <div className='bg-[#f5f1ff] rounded-lg p-7'>
                    <h3 className='text-[#1A1919] text-xl font-bold'>Job Details</h3>
                    <hr className='border-t-2 border-gray-400 my-5' />

                    <div className='text-lg'>
                        <p className='flex flex-wrap'>
                            <CurrencyDollarIcon className="h-6 w-6 text-purple-500" />
                            <b className='mx-1'>Salary:</b>{salary}
                        </p>
                        <p className='flex flex-wrap mt-3 mb-6'>
                            <CalendarDaysIcon className="h-6 w-6 text-purple-500" />
                            <b className='mx-1'>Job Title:</b>{jobTitle}
                        </p>
                    </div>

                    <h3 className='text-[#1A1919] text-xl font-bold'>Contact Information</h3>
                    <hr className='border-t-2 border-gray-400 my-5' />

                    <div className='text-lg'>
                        <p className='flex flex-wrap'>
                            <PhoneIcon className="h-6 w-6 text-purple-500" />
                            <b className='mx-1'>Phone:</b>{contactInformation?.phone}
                        </p> <p className='flex flex-wrap my-3'>
                            <EnvelopeIcon className="h-6 w-6 text-purple-500" />
                            <b className='mx-1'>Email:</b> <span className='flex flex-wrap'>{contactInformation?.email}</span>
                        </p> <p className='flex flex-wrap'>
                            <MapPinIcon className="h-6 w-6 text-purple-500" />
                            <b className='mx-1'>Address:</b>{location}
                        </p>
                    </div>
                </div>

                <button onClick={() => addDetailsToDb(id)} className='w-full mt-9'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetail;
