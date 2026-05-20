export const getTutors = async () => {
        const res = await fetch(`${process.env.API_URI}/tutorsAvailable`);
        const data = await res.json();
        return data;
};

export const getAllTutors = async (search, startDate, endDate) => {
        console.log('search', search);
  const res = await fetch(
    `${process.env.API_URI}/tutors?search=${search}&startDate=${startDate}&endDate=${endDate}`,
    {
      cache: "no-store"
    }
  );

  return res.json();
};

export const getTutorById = async (id,token) => {
        const res = await fetch(`${process.env.API_URI}/tutors/${id}`,{
                headers:{
                        authorization: `Bearer ${token}`
                }
        });
        const data = await res.json();
        return data;
}


export const getTutorByUserEmail = async (email,token) => {
        const res = await fetch(`${process.env.API_URI}/tutors/email/${email}`,{
                headers:{
                        authorization: `Bearer ${token}`
                }
        });
        const data = await res.json();
        return data;
}