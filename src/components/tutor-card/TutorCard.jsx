import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TutorCard = ({ tutor }) => {
    return (
        <div key={tutor._id} className='rounded-lg border border-slate-300 shadow shadow-slate-400'>
            <Image src={tutor?.image} alt={tutor?.tutorName} height={200} width={200} className='w-full rounded-t-lg' />
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
                <Link href={`/tutors/${tutor._id}`}>
                    <Button variant='outline' className={'rounded-lg w-full mt-2'}>Book Session</Button>
                </Link>
            </div> 
        </div>
    );
};

export default TutorCard;