import { AlertDialog, Button, Table } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';
import DeleteTutor from '../modal/deleteTutor/DeleteTutor';

const MyTutors = ({ tutors }) => {
    console.log('tt',tutors);

    return (
        <Table>
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-150">
                    <Table.Header>
                        <Table.Column isRowHeader>Name</Table.Column>
                        <Table.Column>Subject</Table.Column>
                        <Table.Column>Fee per Hour</Table.Column>
                        <Table.Column>Slots</Table.Column>
                        <Table.Column>Location</Table.Column>
                        <Table.Column>Mode</Table.Column>
                        <Table.Column>SessionDate</Table.Column>
                        <Table.Column>Actions</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            tutors.map((tutor) => (
                                <Table.Row key={tutor._id}>
                                    <Table.Cell>{tutor.tutorName}</Table.Cell>
                                    <Table.Cell>{tutor.subject}</Table.Cell>
                                    <Table.Cell>${tutor.fee}</Table.Cell>
                                    <Table.Cell>{tutor.slot}</Table.Cell>
                                    <Table.Cell>{tutor.location}</Table.Cell>
                                    <Table.Cell>{tutor.mode}</Table.Cell>
                                    <Table.Cell>{tutor.sessionDate}</Table.Cell>
                                    <Table.Cell className={'flex gap-2'}>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                                            Edit
                                        </button>
                                        <DeleteTutor tutor={tutor} />
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
};

export default MyTutors;