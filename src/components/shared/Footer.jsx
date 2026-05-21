import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/assests/logo.png';
import Link from 'next/link';
import { FaFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className='bg-[#0F172B]'>
            <div className='lg:container mx-auto px-6 py-12 text-white space-y-8'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-1'>
                            <Image src={Logo} alt="Logo" width={40} height={40} />
                            <h2 className='font-bold'>MediQueue</h2>
                        </div>
                        <p className='text-[#90A1B9]'>Connecting students with expert tutors for personalized learning experiences.</p>

                        <div className='flex gap-4 text-2xl text-[#90A1B9]'>
                            <FaSquareXTwitter />
                            <FaFacebook />
                            <FaInstagramSquare />
                            <IoLogoYoutube />
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h2 className='font-bold'>Quick Links</h2>
                        <ul className="flex flex-col gap-2 text-[#90A1B9]">
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/tutors"}>Tutors</Link>
                            </li>
                            <li>
                                <Link href={"/add-tutors"}>Add Tutors</Link>
                            </li>
                            <li>
                                <Link href={"/my-tutors"}>My Tutors</Link>
                            </li>
                            <li>
                                <Link href={"/my-booked-sessions"}>My Booked Sessions</Link>
                            </li>
                        </ul>
                    </div>

                     <div className='space-y-4'>
                        <h2 className='font-bold'>Support</h2>
                        <ul className="flex flex-col gap-2 text-[#90A1B9]">
                            <li>Help Center</li>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                     <div className='space-y-4'>
                        <h2 className='font-bold'>Contact</h2>
                        <ul className="flex flex-col gap-2 text-[#90A1B9]">
                            <li>support@mediqueue.com</li>
                            <li>+880 1234 567890</li>
                            <li>Rajshahi, Bangladesh</li>
                        </ul>
                    </div>
                </div>

                <hr className='text-slate-500' />
                <div className='text-center text-sm text-[#90A1B9] mt-4'>
                    &copy; {new Date().getFullYear()} MediQueue. All rights reserved.
                </div>  
            </div>
        </div>
    );
};

export default Footer;