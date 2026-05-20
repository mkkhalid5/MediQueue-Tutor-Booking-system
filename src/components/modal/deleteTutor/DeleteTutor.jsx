'use client'
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';

const DeleteTutor = ({tutor}) => {
    const handleDelete = async () => {
            const res = await fetch(`${process.env.API_URI}/tutors/${tutor?._id}`, {
                method: 'DELETE'
            });
    
            if(res.ok){
                toast('Tutor deleted successfully!',{
                    icon: '🚫',
                });
                window.location.reload();
            } else {
                toast.error('Failed to delete tutor');
            }
        };
    return (
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
                            <AlertDialog.Heading>Delete Tutor permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong> {tutor?.tutorName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button slot="close" variant="danger" onClick={handleDelete}>
                                Delete Tutor
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteTutor;