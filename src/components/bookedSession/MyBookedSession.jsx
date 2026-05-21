'use client'
import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';
import { CiCalendarDate } from 'react-icons/ci';

const MyBookedSession = ({ data }) => {
    const { tutor, _id, status } = data;
    const price = parseInt(tutor?.fee);

    const handleCancelSession = async () => {
        try {
            const tokenData = await authClient.token();
            console.log('tokenData',tokenData);
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URI}/cancel-booking/${_id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${tokenData?.data?.token}`,
                    }
                }
          );
            const result = await res.json();
            console.log(result);
           if (result.modifiedCount > 0) {
                toast.success('Session Cancelled Successfully');
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to cancel session');
        }
    };
    return (
        <div className='flex flex-col md:flex-row gap-5 justify-between bg-[#F8FAFC] p-4 rounded-lg shadow-md'>
            <div>
                <h2 className='text-lg font-semibold text-[#0F172B]'>
                    {tutor?.tutorName}
                </h2>
                <p className='text-[#155DFC]'>
                    {tutor?.subject}
                </p>
                <div className='flex items-center gap-2 text-[#45556C] mt-2'>
                    <CiCalendarDate />
                    <p>{tutor?.sessionDate}</p>
                </div>
                <div className='mt-3'>
                    <span
                        className={`
                            px-3 py-1 rounded-full text-sm font-medium
                            ${status === 'upcoming' && 'bg-blue-100 text-blue-600'}
                            ${status === 'completed' && 'bg-green-100 text-green-600'}
                            ${status === 'cancel' && 'bg-red-100 text-red-600'}
                        `}
                    >
                        {status}
                    </span>
                </div>
                <div className='flex flex-col md:flex-row gap-2 items-start md:items-center mt-4'>
                    <Button
                        className='rounded-lg bg-blue-200 text-blue-500'
                        isDisabled={status === 'cancel'}
                    >
                        Join Session
                    </Button>
                    <AlertDialog>
                        <Button
                            className='rounded-lg bg-red-200 text-red-500'
                            isDisabled={status === 'cancel'}
                        >
                            Cancel Session
                        </Button>
                        <AlertDialog.Backdrop>
                         <AlertDialog.Container>
                                <AlertDialog.Dialog className="sm:max-w-100">
                                    <AlertDialog.CloseTrigger />
                                    <AlertDialog.Header>
                                        <AlertDialog.Icon status="danger" />
                                        <AlertDialog.Heading>
                                            Cancel Session?
                                        </AlertDialog.Heading>
                                    </AlertDialog.Header>
                                    <AlertDialog.Body>
                                        <p>
                                            Are you sure you want to cancel this session?
                                        </p>
                                    </AlertDialog.Body>
                                    <AlertDialog.Footer>
                                        <Button slot="close" variant="tertiary">
                                            Close
                                        </Button>
                                        <Button
                                            slot="close"
                                            variant="danger"
                                            onClick={handleCancelSession}
                                        >
                                            Confirm Cancel
                                        </Button>
                                    </AlertDialog.Footer>
                                </AlertDialog.Dialog>
                            </AlertDialog.Container>
                        </AlertDialog.Backdrop>
                    </AlertDialog>
                </div>
            </div>
            <div>
                <p className='text-[#0F172B] font-bold text-2xl'>
                    ${price}
                </p>
                <p className='text-[#45556C]'>
                    1 hour
                </p>
            </div>
        </div>
    );
};

export default MyBookedSession;