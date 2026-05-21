
import BookTutor from '@/components/modal/bookTutor/BookTutor';
import { auth } from '@/lib/auth';
import { getTutorById } from '@/lib/tutors';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { CiClock2, CiLocationOn } from 'react-icons/ci';
import { IoBookOutline, IoCalendarClearOutline } from 'react-icons/io5';
import { LuUser } from 'react-icons/lu';
import { MdCalendarMonth, MdOutlineMailOutline } from 'react-icons/md';
import { PiBuildingOfficeBold } from 'react-icons/pi';
import { TbDeviceDesktop } from 'react-icons/tb';

export const metadata = {
    title: 'MediQueue - Tutor Details',
    description: 'Detailed information about the tutor, including subject, experience, and contact details.',
};

const TutorDetailsPage = async ({ params }) => {
    const { id } = await params;
    const {token} = await auth.api.getToken({
        headers: await headers(),
    })
  
    const tutor = await getTutorById(id,token);
    
    return (
        <div className='max-w-7xl mx-auto px-6 py-10'>
            <div className='flex justify-between'>
                <h2 className='text-5xl font-bold'>Tutor Details</h2>
                <Link href={'/tutors'}><Button variant='outline' className={'rounded-lg'}>Back to Tutors Page</Button></Link>
            </div>

            <div className='p-4 rounded-lg shadow border border-slate-300 mt-6 flex flex-col md:flex-row items-center gap-8'>
                <Image src={tutor?.image} alt={tutor?.name || 'Tutor Image'} width={300} height={300} />
                <div className='space-y-2'>
                    <h2 className='text-3xl font-bold'>{tutor?.tutorName}</h2>
                    <p className='text-lg px-2 rounded-full bg-purple-200 text-purple-500 w-max'>{tutor?.subject}</p>
                    <p className='flex items-center gap-2 text-slate-500'><LuUser /> Added by: {tutor?.userName}</p>
                    <p className='flex items-center gap-2 text-slate-500'><MdOutlineMailOutline /> Email: {tutor?.userEmail}</p>
                    <p className='flex items-center gap-2 text-slate-500'><MdCalendarMonth /> Session Start Date: {tutor?.sessionDate}</p>
                    <p className='flex items-center gap-2 text-slate-500'><CiLocationOn /> Location: {tutor?.location}</p>
                    <p className='flex items-center gap-2 text-slate-500'><TbDeviceDesktop /> Teaching Mode: <span className='text-lg px-2 rounded-full bg-purple-200 text-purple-500 w-max'>{tutor?.mode}</span></p>
                </div>
                <div className='ml-auto'>
                    <BookTutor tutor={tutor}></BookTutor>
                </div>
            </div>

            <div className='p-4 rounded-lg shadow border border-slate-300 mt-6 flex flex-col gap-8'>
                <h2 className='font-bold text-2xl'>Tutor Information</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-2 shadow border border-slate-300 flex gap-2'>
                        <div className='p-2 rounded-lg bg-purple-100 w-max text-2xl text-purple-500 flex items-center justify-center'>
                            <IoBookOutline />
                        </div>
                        <div>
                            <p>Subject</p>
                            <p className='font-bold'>{tutor?.subject}</p>
                        </div>
                    </div>

                    <div className='p-2 shadow border border-slate-300 flex gap-2'>
                        <div className='p-2 rounded-lg bg-purple-100 w-max text-2xl text-purple-500 flex items-center justify-center'>
                            <CiClock2 />
                        </div>
                        <div>
                            <p>Available Days & Time</p>
                            <p className='font-bold'>{tutor?.available}</p>
                        </div>
                    </div>

                    <div className='p-2 shadow border border-slate-300 flex gap-2'>
                        <div className='p-2 rounded-lg bg-purple-100 w-max text-2xl text-purple-500 flex items-center justify-center'>
                            <AiOutlineDollar />
                        </div>
                        <div>
                            <p>Hourly Fee</p>
                            <p className='font-bold'>${tutor?.fee}</p>
                        </div>
                    </div>

                    <div className='p-2 shadow border border-slate-300 flex gap-2'>
                        <div className='p-2 rounded-lg bg-purple-100 w-max text-2xl text-purple-500 flex items-center justify-center'>
                            <IoCalendarClearOutline />
                        </div>
                        <div>
                            <p>Total Slot</p>
                            <p className='font-bold'>{tutor?.slot}</p>
                        </div>
                    </div>
                    <div className='p-2 shadow border border-slate-300 flex gap-2 md:col-span-2'>
                        <div className='p-2 rounded-lg bg-purple-100 w-max text-2xl text-purple-500 flex items-center justify-center'>
                            <PiBuildingOfficeBold />
                        </div>
                        <div>
                            <p>Institution & Expreience</p>
                            <p className='font-bold'>{tutor?.experience}</p>
                        </div>
                    </div>
                    <div className=' p-2 shadow border border-slate-300 flex gap-2 md:col-span-2'>
                        <div className='p-2 rounded-lg bg-purple-100 w-max text-2xl text-purple-500 flex items-center justify-center'>
                            <CiLocationOn />
                        </div>
                        <div>
                            <p>Location</p>
                            <p className='font-bold'>{tutor?.location}</p>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-200 p-2 shadow border border-slate-300 flex gap-2 items-center '>
                        <MdCalendarMonth />
                        <p>Session Start Date: </p>
                        <p className='font-bold'>{tutor?.sessionDate}</p>
                </div>
            </div>


        </div>
    );
};

export default TutorDetailsPage;