import SignUp from "@/components/signup/SignUp";

export const metadata = {
  title: "MediQueue - Sign Up",
  description: "Create a new account on the MediQueue platform to access your profile and manage your tutoring sessions.",
};
const SignupPage = () => {
    return (
        <div>
            <SignUp />
        </div>
    );
};

export default SignupPage;