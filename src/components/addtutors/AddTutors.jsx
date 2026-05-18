'use client'
import { Button, Card, Description, FieldError, Form, Input, Label, ListBox, TextField, Select, Calendar, DatePicker, DateField } from '@heroui/react';
import {getLocalTimeZone, today} from "@internationalized/date";
import { redirect } from 'next/navigation';
import {DateValue} from "@internationalized/date";
import {useState} from "react";

const AddTutors = () => {
    const [value, setValue] = useState(null);
    const currentDate = today(getLocalTimeZone());
    const isInvalid = value != null && value.compare(currentDate) < 0;
    

    const handleAddTutor = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log("data", userData);


        // console.log("newUser", data);
        // console.log("error", error);
        // if (data) {
        //     redirect('/')
        // }
        // if (error) {
        //     alert(`status: ${error.status} statusText: ${error.statusText}`)
        // }
    }


    return (
        <div className='p-1 py-10'>
            <div className="w-max mx-auto">
                <h2 className="text-center text-2xl font-semibold">Create Account</h2>
                <p className="text-center text-[#6C696D] mb-6">Start your adventure with Wanderlust</p>

                <Card className="rounded-none border">
                    <Form className=" grid md:grid-cols-2 gap-6 p-2.5 space-y-4" onSubmit={handleAddTutor} >
                        <TextField
                            isRequired
                            name="name"
                            type="text"

                        >
                            <Label>Tutor Name</Label>
                            <Input placeholder="khalid" />
                            <FieldError />
                        </TextField>

                        <TextField
                            name="image"
                            type="text"
                        >
                            <Label>Image URL</Label>
                            <Input placeholder="Tutor image url" />
                        </TextField>

                        <Select
                            isRequired
                            className="w-full"
                            name="subject"
                            placeholder="Select one"
                            variant="secondary"
                        >
                            <Label>Subject</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="math" textValue="Math">
                                        Math
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="english" textValue="English">
                                        English
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="physics" textValue="Physics">
                                        Physics
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="chemistry" textValue="Chemistry">
                                        Chemistry
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="biology" textValue="Biology">
                                        Biology
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="database" textValue="Database">
                                        Database
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                            <FieldError />
                        </Select>

                        <TextField
                            name="available"
                            type="text"
                        >
                            <Label>Available Days & Time</Label>
                            <Input placeholder="Sun - Thu 5:00 PM - 8:00 PM" />
                        </TextField>

                        <TextField
                            name="fee"
                            type="number"
                        >
                            <Label>Hourly Fee</Label>
                            <Input placeholder="Tutor Hourly fee" />
                        </TextField>

                        <TextField
                            name="slot"
                            type="number"
                        >
                            <Label>Total slot</Label>
                            <Input placeholder="Tutor total slots" />
                        </TextField>

                        <DatePicker
                            isRequired
                            isInvalid={isInvalid}
                            minValue={currentDate}
                            name="sessionDate"
                            value={value}
                            onChange={setValue}
                        >
                            <Label>Session date</Label>
                            <DateField.Group fullWidth>
                                <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                <DateField.Suffix>
                                    <DatePicker.Trigger>
                                        <DatePicker.TriggerIndicator />
                                    </DatePicker.Trigger>
                                </DateField.Suffix>
                            </DateField.Group>
                            {isInvalid ? (
                                <FieldError>Date must be today or in the future.</FieldError>
                            ) : (
                                <Description>Choose a valid session date.</Description>
                            )}
                            <DatePicker.Popover>
                                <Calendar aria-label="Session date">
                                    <Calendar.Header>
                                        <Calendar.YearPickerTrigger>
                                            <Calendar.YearPickerTriggerHeading />
                                            <Calendar.YearPickerTriggerIndicator />
                                        </Calendar.YearPickerTrigger>
                                        <Calendar.NavButton slot="previous" />
                                        <Calendar.NavButton slot="next" />
                                    </Calendar.Header>
                                    <Calendar.Grid>
                                        <Calendar.GridHeader>
                                            {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                        </Calendar.GridHeader>
                                        <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                                    </Calendar.Grid>
                                    <Calendar.YearPickerGrid>
                                        <Calendar.YearPickerGridBody>
                                            {({ year }) => <Calendar.YearPickerCell year={year} />}
                                        </Calendar.YearPickerGridBody>
                                    </Calendar.YearPickerGrid>
                                </Calendar>
                            </DatePicker.Popover>
                        </DatePicker>

                        <TextField
                            name="experience"
                            type="text"
                        >
                            <Label>Institution & Experience</Label>
                            <Input placeholder="Tutor institution and experience" />
                        </TextField>

                        <TextField
                            name="location"
                            type="text"
                        >
                            <Label>Location (Area/City)</Label>
                            <Input placeholder="Tutor location" />
                        </TextField>

                        <Select
                            isRequired
                            className="w-full"
                            name="mode"
                            placeholder="Select one"
                            variant="secondary"
                        >
                            <Label>Teaching Mode</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="online" textValue="Online">
                                        Online
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="offline" textValue="Offline">
                                        Offline
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="both" textValue="Both">
                                        Both
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                            <FieldError />
                        </Select>
                        <Button type="submit" className={'w-full rounded-sm bg-[#15A1BF] col-span-2'}>
                            Add Tutor
                        </Button>
                    </Form>
                </Card>
            </div>

        </div>
    );
};

export default AddTutors;