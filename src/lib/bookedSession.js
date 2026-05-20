
export const bookedSession = async (userId,token) =>{
    console.log(userId);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/bookings/${userId}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}