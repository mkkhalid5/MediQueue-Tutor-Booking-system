export const bookedSession = async (userId, token) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URI}/bookings/${userId}`,
            {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${token}`,
                    'content-type': 'application/json'
                },
                cache: 'no-store'
            }
        );
        if (!res.ok) {
            throw new Error('Failed to fetch booked sessions');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return {
            bookings: [],
            tutors: []
        };
    }
};