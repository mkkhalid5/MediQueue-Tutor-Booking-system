import { getTutors } from '@/lib/tutors';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const AvailableTutor = async () => {
    const tutors = await getTutors();
    console.log("tutor",tutors);
    return (
        <div className='max-w-7xl mx-auto px-6 py-20'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl md:text-5xl font-bold'>Available Tutors Section</h2>
                <p className='text-[#45556C]'>Meet some of our top-rated educators ready to help you succeed</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    tutors.map(tutor => <div key={tutor._id} className='rounded-lg border border-slate-300 shadow shadow-slate-400'>
                        <Image src={tutor.image} alt={tutor.tutorName} height={200} width={200} className='w-full rounded-t-lg' />
                        <div className='p-6 space-y-2'>
                            <h2 className='text-[#0F172B] font-semibold text-xl'>{tutor.tutorName}</h2>
                            <p className='text-[#155DFC]'>{tutor.subject}</p>
                            <hr />
                            <div className='flex justify-between'>
                            <div>
                                <p className='text-[#45556C]'>From</p>
                                <p className='text-[#0F172B] font-bold'>${tutor.fee}/hr</p>
                            </div>
                            <p className='text-[#45556C]'>{parseInt(tutor.experience?.match(/\d+/)?.[0])}/years exp.</p>
                            
                        </div>
                        <Button variant='outline' className={'rounded-lg w-full mt-2'}>Book Session</Button>
                        </div>
                        
                    </div>)
                }
            </div>
        </div>
    );
};

export default AvailableTutor;