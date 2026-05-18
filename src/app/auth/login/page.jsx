import Login from "@/components/login/Login";

export const metadata = {
  title: "MediQueue - Login",
  description: "Log in to your MediQueue account to access your profile and manage your tutoring sessions.",
};

const LoginPage = () => {
    return (
        <div>
            <Login />
        </div>
    );
};

export default LoginPage;