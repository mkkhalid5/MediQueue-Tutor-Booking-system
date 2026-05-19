import AddTutors from "@/components/addtutors/AddTutors";
import { authClient } from "@/lib/auth-client";

export const metadata = {
  title: "MediQueue - Add Tutors",
  description: "Add new tutors to the MediQueue platform and expand your tutoring network.",
};

const AddTutorsPage =  () => {
     
    return (
        <div className="lg:container mx-auto p-6">
            <h2 className="font-bold text-4xl">Add Tutor Page</h2>
            <AddTutors />
        </div>
    );
};

export default AddTutorsPage;