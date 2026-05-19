
export const bookedSession = async (userId) =>{
    console.log(userId);
    const res = await fetch(`http://localhost:5000/bookings/${userId}`);
    const data = await res.json();
    return data;
}