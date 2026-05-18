import TutorCard from "@/components/tutor-card/TutorCard";
import { getAllTutors } from "@/lib/tutors";

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
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default TutorsPage;