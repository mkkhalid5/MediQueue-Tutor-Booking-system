'use client'
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';

const MyBookedSession = ({ data }) => {
    console.log('data:', data);
    const { tutor,_id } = data;
    const price = parseInt(tutor?.fee);
    const handleDelete =async () => {
        const res = await fetch(`http://localhost:5000/bookings/${_id}`, {
            method: 'DELETE'
        });
        console.log('Delete session with ID:',_id);
        if(res.ok){
            alert('Session deleted successfully');
            window.location.reload();
        } else {
            alert('Failed to delete session');
        }
    };
    return (
        <div className='flex justify-between bg-[#F8FAFC] p-4 rounded-lg shadow-md'>
            <div>
                <h2 className='text-lg font-semibold text-[#0F172B]'>{tutor?.tutorName}</h2>
                <p className='text-[#155DFC]'>{tutor?.subject}</p>
                <div className='flex items-center gap-2 text-[#45556C]'>
                    <CiCalendarDate />
                    <p>{tutor?.sessionDate}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <Button className='rounded-lg bg-blue-200 text-blue-500'>
                        Join Session
                    </Button>
                    <AlertDialog>
                        <Button className={'rounded-lg bg-red-200 text-red-500'} >
                            Delete Session
                        </Button>
                        <AlertDialog.Backdrop>
                            <AlertDialog.Container>
                                <AlertDialog.Dialog className="sm:max-w-100">
                                    <AlertDialog.CloseTrigger />
                                    <AlertDialog.Header>
                                        <AlertDialog.Icon status="danger" />
                                        <AlertDialog.Heading>Delete session permanently?</AlertDialog.Heading>
                                    </AlertDialog.Header>
                                    <AlertDialog.Body>
                                        <p>
                                            This will permanently delete <strong> Session</strong> and all of its
                                            data. This action cannot be undone.
                                        </p>
                                    </AlertDialog.Body>
                                    <AlertDialog.Footer>
                                        <Button slot="close" variant="tertiary">
                                            Cancel
                                        </Button>
                                        <Button slot="close" variant="danger" onClick={handleDelete}>
                                            Delete Session
                                        </Button>
                                    </AlertDialog.Footer>
                                </AlertDialog.Dialog>
                            </AlertDialog.Container>
                        </AlertDialog.Backdrop>
                    </AlertDialog>
                </div>

            </div>
            <div>
                <p className='text-[#0F172B] font-bold text-2xl'>${price}</p>
                <p className='text-[#45556C]'>1 hour</p>
            </div>
        </div>
    );
};

export default MyBookedSession;