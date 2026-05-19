export const getTutors = async () => {
        const res = await fetch('http://localhost:5000/tutorsAvailable');
        const data = await res.json();
        return data;
};

export const getAllTutors = async () => {
        const res = await fetch('http://localhost:5000/tutors');
        const data = await res.json();
        return data;
}

export const getTutorById = async (id) => {
        const res = await fetch(`http://localhost:5000/tutors/${id}`);
        const data = await res.json();
        return data;
}


export const getTutorByUserEmail = async (email) => {
        const res = await fetch(`http://localhost:5000/tutors/email/${email}`);
        const data = await res.json();
        return data;
}