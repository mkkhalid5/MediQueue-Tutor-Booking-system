import React from 'react';
import LoadingState from '../loading/LoadingState';
import { redirect } from 'next/navigation';

const AddTutors = () => {
    const {
        data: session,
        isPending
    } = authClient.useSession();

    const isUser = session?.user;
    {
        if (isPending) {
            return <LoadingState />;
        }
        if (isUser) {
            redirect(`/auth/login`);
        }
    }
    return (
        <div className='lg:container mx-auto flex  items-center justify-between px-6 py-2'>

        </div>
    );
};

export default AddTutors;