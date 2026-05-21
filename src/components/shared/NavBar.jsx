'use client';
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/assests/logo.png";
import ActiveLink from "../activeLink/ActiveLink";
import { authClient } from "@/lib/auth-client";
import LoadingState from "../loading/LoadingState";
import { redirect } from "next/navigation";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { ThemeSwitch } from "../ThemeSwitch";
import { IoExitOutline } from "react-icons/io5";

const NavBar = () => {
    const { theme, setTheme } = useTheme();
    const {
        data: session,
        isPending
    } = authClient.useSession();

    const isUser = session?.user;

    const handleLogout = () => {
        authClient.signOut();
        redirect("/");
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/60 backdrop-blur-lg">
            <header className="lg:container mx-auto flex  items-center justify-between px-6 py-2">
                <div className="flex items-center gap-4">
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only  dark:text-gray-200">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="flex items-center gap-1">
                        <Image src={Logo} alt="Logo" width={40} height={40} />
                        <p className="font-bold">MediQueue</p>
                    </div>
                </div>
                <ul className="hidden items-center gap-4 lg:flex">
                    <li>
                        <ActiveLink href={"/"}>Home</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href={"/tutors"}>Tutors</ActiveLink>
                    </li>
                    <li>
                        {!isUser ? (
                            <ActiveLink href={`/auth/login?callbackUrl=%2Fadd-tutors`}>Add Tutors</ActiveLink>
                        ) : <ActiveLink href={"/add-tutors"}>Add Tutors</ActiveLink>}
                    </li>
                    <li>
                        {!isUser ? (
                            <ActiveLink href={`/auth/login?callbackUrl=%2Fmy-tutors`}>My Tutors</ActiveLink>
                        ) : <ActiveLink href={"/my-tutors"}>My Tutors</ActiveLink>}
                    </li>
                    <li>
                        {!isUser ? (
                            <ActiveLink href={`/auth/login?callbackUrl=%2Fmy-booked-sessions`}>My Booked Sessions</ActiveLink>
                        ) : <ActiveLink href={"/my-booked-sessions"}>My Booked Sessions</ActiveLink>}
                    </li>
                </ul>
                <div className="flex items-center gap-4">
                    {
                        isPending ? (
                            <LoadingState />
                        ) :
                            isUser ? (
                                <div className=" items-center gap-4 flex">
                                    <ActiveLink href="/myprofile">
                                        <Image alt="" height={40} width={40} className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300" src={isUser?.image || "https://source.unsplash.com/40x40/?portrait?1"} />
                                    </ActiveLink>
                                    <button onClick={handleLogout} className="hidden md:flex text-sm font-medium text-primary hover:text-primary-hover dark:text-gray-200 dark:hover:text-gray-300 justify-center items-center gap-1">
                                        <IoExitOutline className="text-lg" /> Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="hidden items-center gap-4 md:flex dark:text-gray-200">
                                    <ActiveLink href={"/auth/login"}>Login</ActiveLink>
                                    <ActiveLink href={"/auth/signup"}>Sign Up</ActiveLink>
                                </div>
                            )}

                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator lg:hidden">
                    <ul className="flex flex-col gap-2 p-4 ">
                        <li>
                            <ActiveLink href={"/"}>Home</ActiveLink>
                        </li>
                        <li>
                             <ActiveLink href={"/tutors"}>Tutors</ActiveLink>
                        </li>
                        <li>
                            {!isUser ? (
                                <ActiveLink href={`/auth/login?callbackUrl=%2Fadd-tutors`}>Add Tutors</ActiveLink>
                            ) : <ActiveLink href={"/add-tutors"}>Add Tutors</ActiveLink>}
                        </li>
                        <li>
                            {!isUser ? (
                                <ActiveLink href={`/auth/login?callbackUrl=%2Fmy-tutors`}>My Tutors</ActiveLink>
                            ) : <ActiveLink href={"/my-tutors"}>My Tutors</ActiveLink>}
                        </li>
                        <li>
                            {!isUser ? (
                                <ActiveLink href={`/auth/login?callbackUrl=%2Fmy-booked-sessions`}>My Booked Sessions</ActiveLink>
                            ) : <ActiveLink href={"/my-booked-sessions"}>My Booked Sessions</ActiveLink>}
                        </li>
                    </ul>
                    {!isUser ? (
                        <div className="md:hidden items-center gap-4 flex">
                            <ActiveLink href={"/auth/login"}>Login</ActiveLink>
                            <ActiveLink href={"/auth/signup"}>Sign Up</ActiveLink>
                        </div>
                    ) : <button onClick={handleLogout} className="md:hidden text-sm font-medium text-primary hover:text-primary-hover flex ml-4 mb-2 justify-center items-center gap-1 dark:text-gray-200 dark:hover:text-gray-300"> <IoExitOutline /> Logout</button>}
                </div>
            )}
        </nav>
    );
};

export default NavBar;