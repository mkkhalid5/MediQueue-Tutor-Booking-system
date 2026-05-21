export const getTutors = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/tutorsAvailable`, {
                cache: "no-store",
        });
        const data = await res.json();
        return data;
};

export const getAllTutors = async (search) => {
        console.log('search', search);
        const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URI}/tutors?search=${search}`,
                {
                        cache: "no-store"
                }
        );

        return res.json();
};

export const getTutorById = async (id, token) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/tutors/${id}`, {
                headers: {
                        authorization: `Bearer ${token}`
                }
        });
        const data = await res.json();
        return data;
}


export const getTutorByUserEmail = async (email, token) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/tutors/email/${email}`, {
                headers: {
                        authorization: `Bearer ${token}`
                }
        });
        const data = await res.json();
        return data;
}