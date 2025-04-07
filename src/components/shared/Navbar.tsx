'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { protectedRoutes } from "@/constants";
import { useUser } from "@/context/UserContext";
import { logoutUser } from "@/services/AuthService";
import { UserRole } from "@/types";
import { AlignRight, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/button';
import LoginModal from "../ui/core/TLModals/login";

const Navbar = () => {
    const pathname = usePathname();
    const [toggle, setToggle] = useState(false);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const router = useRouter();

    const { user, setIsLoading } = useUser()

    console.log(user);
    // Function to open the modal
    const openModal = (): void => {
        setModalOpen(true);
    };

    // Function to close the modal
    const closeModal = (): void => {
        setModalOpen(false);
    };

    const isActive = (path: string) => pathname === path ? "text-dark" : "text-gray-600 hover:text-dark";

    const handleLogout = () => {
        logoutUser();
        setIsLoading(true)
        if (protectedRoutes.some(route => pathname.match(route))) {
            router.push("/")
        }
    }

    const role = user?.role as UserRole;
    const handleDashboardOpen = () => {
        if (role === "student") {
            router.push("/student/dashboard")
        }
        if (role === "tutor") {
            router.push("/tutor/dashboard")
        }
    }

    const handleProfileOpen = () => {
        if (role === "student") {
            router.push("/student/profile")
        }
        if (role === "tutor") {
            router.push("/tutor/profile")
        }
    }

    return (
        <div className="padding-x w-full py-5 fixed top-0 z-20 bg-background">
            <div className="w-[93%] flex justify-between items-center max-w-7xl mx-auto">
                <div className="w-full lg:w-auto justify-between flex items-center">
                    <Link
                        href="/"
                        className="ml-4 text-xl font-semibold flex items-center gap-1 text-gray-800 hover:text-gray-600"
                    >
                        <p className="text-dark text-[18px] font-bold cursor-pointer flex">
                            TutorLink 🎓
                        </p>
                    </Link>

                    <div className="relative lg:hidden">
                        <div
                            onClick={() => setToggle(!toggle)}
                            tabIndex={0}
                            role="button"
                            className="p-2 h-10 w-10 rounded-md hover:bg-black-100 focus:outline-none"
                        >
                            <AlignRight />
                        </div>
                        {toggle && (
                            <ul
                                tabIndex={0}
                                className="absolute mt-3 right-0 z-10 p-4 shadow-md bg-white rounded-md w-52"
                            >
                                <li className="hover:text-gray-600 p-2">
                                    <Link href="/" className={isActive('/')}>Home</Link>
                                </li>
                                <li className="hover:text-gray-600 p-2">
                                    <Link href="/browse-tutors" className={isActive('/browse-tutors')}>Browse Tutors</Link>
                                </li>
                                <li className="hover:text-gray-600 p-2">
                                    <Link href="/about" className={isActive('/about')}>About Us</Link>
                                </li>
                                <li className="hover:text-gray-600 p-2">
                                    <Link href="/faq" className={isActive('/faq')}>FAQ</Link>
                                </li>
                                <li className="hover:text-gray-600 p-2">
                                    <Link href="/blog" className={isActive('/blog')}>Blog</Link>
                                </li>
                                {/* Adjust based on user session */}
                                <li className="hover:text-gray-600 p-2">
                                    <Link href="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-2">
                    {/* <Link href="/cart">
                        <ShoppingCart />
                    </Link> */}

                    {/* Conditional rendering based on user session */}
                    {!user ? (

                        <Button onClick={openModal} variant="outline" className='rounded-full px-3'>
                            Log in
                        </Button>

                    ) : (
                        <>

                            {/* Dashboard and Profile Links based on role */}
                            <Link href={`/${user?.role}-dashboard`}>
                                <Button variant="ghost" className='rounded-full font-semibold bg-accent hover:bg-primary hover:text-white'>
                                    Dashboard
                                </Button>
                            </Link>

                            {role !== "tutor" && <Link href="/tutor-request">
                                <Button variant="outline" className='rounded-full'>
                                    Become Tutor
                                </Button>
                            </Link>}

                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>User</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="cursor-pointer" onCanPlay={handleProfileOpen}>Profile</DropdownMenuItem>
                                    <DropdownMenuItem className="cursor-pointer"
                                        onClick={handleDashboardOpen}
                                    >My Dashboard</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className='text-red-500 cursor-pointer'>
                                        <LogOut />
                                        <span onClick={handleLogout}>Log Out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    )}
                </div>
            </div>
            {
                isModalOpen && <LoginModal isOpen={isModalOpen} onClose={closeModal} />
            }
        </div>
    );
};

export default Navbar;
