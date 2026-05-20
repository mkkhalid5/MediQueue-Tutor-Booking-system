'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const BookTutor = ({ tutor }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();
    console.log(user);
    console.log('tutor',tutor);

    const handleBooking = async (e) => {
        
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const bookingData = Object.fromEntries(formData.entries());

        const {_id, tutorName} = tutor;
        console.log('id',_id);
        const newBooking = {
            studentId: user?.id,
            studentName: bookingData.name,
            studentPhone: bookingData.phone,
            studentEmail: user?.email,
            tutorId: _id,
            tutorName
        }
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/bookings`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newBooking),
            });
            const data = await res.json();
            console.log(data);
            if (res.ok) {
                toast.success("Session booked successfully");
                router.push('/my-booked-sessions');
            }
            else {
                toast.error("You have already booked this session or something went wrong");
            }
        }
        catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }

    }
    return (
        <Modal>
            {tutor.slot === 0 ? <p p className={'rounded-lg'}>Tutor is not available</p> : <Button variant="outline" className={'rounded-lg'}>Book Tutor</Button>}
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4" onSubmit={handleBooking}>
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Your Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="phone" type="tel">
                                        <Label>Your Phone</Label>
                                        <Input placeholder="Enter your phone number" />
                                    </TextField>
                                    <TextField className="w-full" name="_id"  >
                                        <Label>Tutor Id</Label>
                                        <Input placeholder={tutor?._id} disabled />
                                    </TextField>
                                    <TextField className="w-full" name="tutorName"  >
                                        <Label>Tutor Name</Label>
                                        <Input placeholder={tutor?.tutorName} disabled />
                                    </TextField>
                                    <TextField className="w-full" name="studentEmail"  >
                                        <Label>Your Email</Label>
                                        <Input placeholder={user?.email} disabled />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button slot="close" type='submit'>Confirm Booking</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default BookTutor;