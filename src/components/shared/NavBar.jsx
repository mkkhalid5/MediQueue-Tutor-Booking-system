'use client';
import { useState } from "react";
import { Link, Button } from "@heroui/react"
import Image from "next/image";
import Logo from "../../../public/assests/logo.png";
import ActiveLink from "../activeLink/ActiveLink";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-slate-200 bg-background/70 backdrop-blur-lg">
            <header className="lg:container mx-auto flex  items-center justify-between px-6 py-2">
                <div className="flex items-center gap-4">
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
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
                        <ActiveLink href={"/add-tutors"}>Add Tutors</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href={"/my-tutors"}>My Tutors</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href={"/my-booked-sessions"}>My Booked Sessions</ActiveLink>
                    </li>
                </ul>
                <div className="flex items-center gap-4">
                    <ActiveLink href="/myprofile"><Image src={Logo} alt="user" width={40} height={40} className="rounded-full" /></ActiveLink>
                    <div className="hidden items-center gap-4 md:flex">
                        <ActiveLink href={"/auth/login"}>Login</ActiveLink>
                        <ActiveLink href={"/auth/signup"}>Sign Up</ActiveLink>
                    </div>
                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator lg:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        <li>
                            <ActiveLink href={"/"}>Home</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href={"/tutors"}>Tutors</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href={"/add-tutors"}>Add Tutors</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href={"/my-tutors"}>My Tutors</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href={"/my-booked-sessions"}>My Booked Sessions</ActiveLink>
                        </li>
                    </ul>
                    <div className="md:hidden items-center gap-4 flex">
                        <ActiveLink href={"/auth/login"}>Login</ActiveLink>
                        <ActiveLink href={"/auth/signup"}>Sign Up</ActiveLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;