import { AlertDialog, Button, Table } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';
import DeleteTutor from '../modal/deleteTutor/DeleteTutor';

const MyTutors = ({ tutors }) => {
    console.log('tt', tutors);

    return (
        <div>

            {/* Desktop Table */}
            <div className="hidden lg:block">
                <Table>
                    <Table.Content aria-label="Tutors Table">

                        <Table.Header>
                            <Table.Column isRowHeader>Name</Table.Column>
                            <Table.Column>Subject</Table.Column>
                            <Table.Column>Fee</Table.Column>
                            <Table.Column>Slots</Table.Column>
                            <Table.Column>Location</Table.Column>
                            <Table.Column>Mode</Table.Column>
                            <Table.Column>Date</Table.Column>
                            <Table.Column>Actions</Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {tutors.map((tutor) => (
                                <Table.Row key={tutor._id}>

                                    <Table.Cell>{tutor.tutorName}</Table.Cell>

                                    <Table.Cell className="capitalize">
                                        {tutor.subject}
                                    </Table.Cell>

                                    <Table.Cell>
                                        ${tutor.fee}
                                    </Table.Cell>

                                    <Table.Cell>
                                        {tutor.slot}
                                    </Table.Cell>

                                    <Table.Cell>
                                        {tutor.location}
                                    </Table.Cell>

                                    <Table.Cell>
                                        {tutor.mode}
                                    </Table.Cell>

                                    <Table.Cell>
                                        {tutor.sessionDate}
                                    </Table.Cell>

                                    <Table.Cell>
                                        <div className="flex gap-2">

                                            <button
                                                className="
                                            rounded-lg bg-blue-600 px-4 py-2
                                            text-white hover:bg-blue-700
                                        "
                                            >
                                                Edit
                                            </button>

                                            <DeleteTutor tutor={tutor} />
                                        </div>
                                    </Table.Cell>

                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Content>
                </Table>
            </div>

            {/* Mobile & Tablet Cards */}
            <div className="grid gap-4 lg:hidden">

                {tutors.map((tutor) => (
                    <div
                        key={tutor._id}
                        className="
                    rounded-2xl border border-gray-200
                    bg-white p-5 shadow-sm
                "
                    >

                        <div className="mb-4">
                            <h2 className="text-lg font-bold">
                                {tutor.tutorName}
                            </h2>

                            <p className="capitalize text-gray-500">
                                {tutor.subject}
                            </p>
                        </div>

                        <div className="space-y-2 text-sm">

                            <p>
                                <span className="font-semibold">Fee:</span> ${tutor.fee}
                            </p>

                            <p>
                                <span className="font-semibold">Slots:</span> {tutor.slot}
                            </p>

                            <p>
                                <span className="font-semibold">Location:</span> {tutor.location}
                            </p>

                            <p>
                                <span className="font-semibold">Mode:</span> {tutor.mode}
                            </p>

                            <p>
                                <span className="font-semibold">Date:</span> {tutor.sessionDate}
                            </p>
                        </div>

                        <div className="mt-5 flex gap-3">

                            <button
                                className="
                            rounded-lg bg-blue-600 px-4 py-2
                            text-sm text-white hover:bg-blue-700
                        "
                            >
                                Edit
                            </button>

                            <DeleteTutor tutor={tutor} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyTutors;