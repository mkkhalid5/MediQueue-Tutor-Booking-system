
export const bookedSession = async (userId,token) =>{
    console.log(userId);
    const res = await fetch(`${process.env.API_URI}/bookings/${userId}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}