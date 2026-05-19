export const getTutors = async () => {
        const res = await fetch('http://localhost:5000/tutorsAvailable');
        const data = await res.json();
        return data;
};

export const getAllTutors = async (search, startDate, endDate) => {
        console.log('search', search);
  const res = await fetch(
    `http://localhost:5000/tutors?search=${search}&startDate=${startDate}&endDate=${endDate}`,
    {
      cache: "no-store"
    }
  );

  return res.json();
};

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