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
import { AlignRight, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/button';

const Navbar = () => {
    const pathname = usePathname();
    const [toggle, setToggle] = useState(false);

    const isActive = (path: string) => pathname === path ? "text-dark" : "text-gray-600 hover:text-dark";

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
                                className="absolute mt-3 right-0 z-10 p-4 shadow-md bg-tertiary rounded-md w-52"
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
                    {/* {!user ? (
                        <Link href="/login">
                            <Button variant="outline" className='rounded-full'>
                                Login
                            </Button>
                        </Link>
                    ) : ( */}
                    <>
                        {/* Dashboard and Profile Links based on role */}
                        <Link href="/student-dashboard">
                            <Button variant="ghost" className='rounded-full font-semibold bg-accent hover:bg-primary hover:text-white'>
                                Student Dashboard
                            </Button>
                        </Link>

                        <Link href="/tutor-dashboard">
                            <Button variant="outline" className='rounded-full'>
                                Tutor Dashboard
                            </Button>
                        </Link>

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
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>My Dashboard</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className='text-red-500 cursor-pointer'>
                                    <LogOut />
                                    <span>Log Out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                    {/* )} */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
