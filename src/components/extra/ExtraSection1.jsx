import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FiMessageCircle, FiShield } from 'react-icons/fi';
import { MdAccessTime } from 'react-icons/md';

const ExtraSection1 = () => {
    return (
        <div className='bg-[#008080] py-20 px-4'>
            <div className='text-center  space-y-4'>
                <h2 className=' font-bold text-2xl md:text-5xl text-white'>Why Choose MediQueue?</h2>
                <p className=' text-[#CAD5E2]'>Book sessions that fit your busy lifestyle with our easy calendar system</p>
            </div>
            <div className='lg:container mx-auto px-6 mt-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 text-white'>

                    <div className='bg-white/30 rounded-lg shadow-lg p-6'>
                        <CiCalendar className='text-5xl' />
                        <h3 className='font-bold text-xl mb-4'>Flexible Scheduling</h3>
                        <p className='text-[#DBEAFE]'>Book sessions that fit your busy lifestyle with our easy calendar system</p>
                    </div>

                    <div className='bg-white/30 rounded-lg shadow-lg p-6'>
                        <FiShield className='text-5xl' />
                        <h3 className='font-bold text-xl mb-4'>Verified Experts</h3>
                        <p className='text-[#DBEAFE]'>All tutors are thoroughly vetted and background-checked professionals</p>
                    </div>

                    <div className='bg-white/30 rounded-lg shadow-lg p-6'>
                        <FiMessageCircle className='text-5xl' />
                        <h3 className='font-bold text-xl mb-4'>Direct Communication</h3>
                        <p className='text-[#DBEAFE]'>Chat with your tutor before booking to ensure the perfect match</p>
                    </div>

                    <div className='bg-white/30 rounded-lg shadow-lg p-6'>
                        <MdAccessTime className='text-5xl' />
                        <h3 className='font-bold text-xl mb-4'>24/7 Support</h3>
                        <p className='text-[#DBEAFE]'>Our support team is always available to help you succeed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;