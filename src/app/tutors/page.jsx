import TutorCard from "@/components/tutor-card/TutorCard";
import { getAllTutors } from "@/lib/tutors";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "MediQueue - Tutors",
    description: "Browse and view information about available tutors on the MediQueue platform.",
};

const TutorsPage = async () => {
    const tutors = await getAllTutors();
    return (
        <div className="lg:container mx-auto px-6 py-10">
            <div className='text-center'>
                <h2 className='text-4xl md:text-5xl font-bold'>All Tutors</h2>
                <p className='text-[#45556C]'>Browse {tutors.length} expert tutors across multiple subjects</p>
            </div>

            <div className="max-w-7xl mx-auto mt-4 space-y-4">
                <p className="text-[#45556C]">{tutors.length} tutors found</p>
                {
                tutors.length === 0 ? (
                    <div className="mt-10 flex justify-center items-center px-4">
      
      <div className="max-w-md w-full bg-white border shadow-lg rounded-2xl p-8 text-center">

        <Image
          src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
          alt="No Tutors"
          width={130}
          height={130}
          className="mx-auto mb-6"
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          No Tutors Added Yet
        </h2>

        <p className="text-gray-500 mb-6">
          You haven`t added any tutors yet.
          Start by creating your first tutor profile and manage sessions easily.
        </p>

        <Link href="/add-tutors">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition w-full">
            Add New Tutor
          </button>
        </Link>

      </div>

    </div>):(<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor} />)
                    }
                </div>)}
            </div>

        </div>
    );
};

export default TutorsPage;