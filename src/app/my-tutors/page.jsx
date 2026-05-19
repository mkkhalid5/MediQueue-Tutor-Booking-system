import MyTutors from "@/components/my-tutors/MyTutors";
import { auth } from "@/lib/auth";
import { getTutorByUserEmail } from "@/lib/tutors";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MediQueue - My Tutors",
  description: "View and manage your list of enrolled tutors on the MediQueue platform.",
};

const MyTutorsPage = async () => {
    const session = await auth.api.getSession({
            headers: await headers()
        });
        const user = session?.user;
        console.log(user);
    const tutors = await getTutorByUserEmail(user?.email);
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-[#0F172B] text-4xl font-bold">My Tutors</h2>
            <p className="text-[#45556C]">Manage your tutor profiles.</p>

            {
            tutors.length === 0? (<div className="mt-8 p-8 container mx-auto flex justify-center items-center">
                        <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center border">

                            <Image
                                src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                                alt="No Sessions"
                                width={128}
                                height={128}
                                className="w-32 mx-auto mb-6"
                            />
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                No Tutor Profiles 
                            </h2>
                            <p className="text-gray-500 mb-6">
                                You haven`t added any tutors yet.
                                Add a tutor to your list.
                            </p>
                            <Link href="/tutors">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition">
                                    Add Tutor
                                </button>
                            </Link>
                        </div>
                    </div>):(<div className="mt-10">
                 <MyTutors tutors={tutors} /> 
                
            </div>)}
        </div>
    );
};

export default MyTutorsPage;