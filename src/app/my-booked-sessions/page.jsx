import MyBookedSession from "@/components/bookedSession/MyBookedSession";
import { auth } from "@/lib/auth";
import { bookedSession } from "@/lib/bookedSession";
import { getSessionStatus } from "@/lib/sessionStatus";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { BiDollar } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";

export const metadata = {
    title: "MediQueue - My Booked Sessions",
    description: "View and manage your booked sessions on the MediQueue platform.",
};

const MyBookedSessionsPage = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    })
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const userId = session?.user?.id;
    const datas = await bookedSession(userId, token);
    const bookings = datas?.bookings || [];
    console.log("bookings", bookings);
    const tutors = datas?.tutors || [];

    const upcomingCount = bookings.filter(
        booking => booking.status === "upcoming"
    ).length;

    const completedCount = bookings.filter(
        booking => booking.status === "completed"
    ).length;


    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-[#0F172B] text-4xl font-bold">My Booked Sessions</h2>
            <p className="text-[#45556C]">Here you can view and manage your booked sessions.</p>
            <div className="grid md:grid-cols-3 gap-8 mt-6">
                <div className="border shadow-md rounded-lg p-6">
                    <div className="flex items-center gap-1">
                        <CiCalendar className=" rounded-md bg-blue-200 text-blue-500 text-2xl font-bold" />
                        <p className="text-2xl text-[#0F172B] font-bold">{upcomingCount}</p>
                    </div>

                    <p className="text-[#45556C]">Upcoming Sessions</p>
                </div>
                <div className="border shadow-md rounded-lg p-6">
                    <div className="flex items-center gap-1">
                        <BiDollar className="rounded-md bg-green-200 text-green-500 text-2xl font-bold" />
                        <p className="text-2xl text-[#0F172B] font-bold">{completedCount}</p>
                    </div>

                    <p className="text-[#45556C]">Completed Sessions</p>
                </div>
                <div className="border shadow-md rounded-lg p-6">
                    <div className="flex items-center gap-1">
                        <BiDollar className="rounded-md bg-cyan-200 text-cyan-500 text-2xl font-bold" />
                        <p className="text-2xl text-[#0F172B] font-bold">{tutors.reduce((total, tutor) => total + parseInt(tutor?.fee), 0)}</p>
                    </div>

                    <p className="text-[#45556C]">Total Spent</p>
                </div>
            </div>

            {
                bookings.length === 0 ?
                    (<div className="mt-8 p-8 container mx-auto flex justify-center items-center">
                        <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center border">

                            <Image
                                src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                                alt="No Sessions"
                                width={128}
                                height={128}
                                className="w-32 mx-auto mb-6"
                            />
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                No Sessions Booked
                            </h2>
                            <p className="text-gray-500 mb-6">
                                You haven`t booked any tutoring sessions yet.
                                Explore available tutors and book your first session.
                            </p>
                            <Link href="/tutors">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition">
                                    Browse Tutors
                                </button>
                            </Link>
                        </div>
                    </div>)
                    : (<div className="mt-8 p-6 grid gap-4 border rounded-lg shadow-md">
                        <h2 className="text-[#45556C]">Total Session: {bookings.length}</h2>
                        {
                            bookings.map((booking) => {
                                const tutor = tutors.find(tutor => tutor._id === booking.tutorId);
                                return (
                                    <MyBookedSession key={booking._id} data={{ ...booking, tutor }} />
                                );
                            })
                        }
                    </div>)}
        </div>
    );
};

export default MyBookedSessionsPage;