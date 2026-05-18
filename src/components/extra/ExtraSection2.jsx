import { Button } from '@heroui/react';
import React from 'react';

const ExtraSection2 = () => {
    return (
        <div className='bg-[linear-gradient(135deg,#0F2B6B_0%,#0A234F_45%,#063B4A_100%)] text-center py-20 px-4 space-y-4'>
            <h2 className='font-bold text-5xl text-white'>Ready to Start Your Learning Journey?</h2>
            <p className='text-[#CAD5E2]'>Join thousands of students already achieving their academic goals with MediQueue</p>
            <div className='mt-8 spce-x-4 flex justify-center gap-4'>
                <Button variant='outline' className='bg-white py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300'>
                    Get Started Now
                </Button>
                
            </div>
        </div>
    );
};

export default ExtraSection2;