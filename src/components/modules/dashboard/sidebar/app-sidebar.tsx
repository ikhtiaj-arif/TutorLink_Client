"use client"

import {
    Bot,
    LifeBuoy,
    Send,
    Settings,
    SquareTerminal
} from "lucide-react";
import * as React from "react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import Link from "next/link";
import { NavMain } from "./nav-main";
import { useUser } from "@/context/UserContext";


const data = {
    studentNav: [
        {
            title: "Student Dashboard",
            url: "/student/dashboard",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "Manage Profile",
                    url: "/student/profile",
                },
                {
                    title: "Past Bookings & Payment History",
                    url: "/student/bookings",
                },
                {
                    title: "Review Tutors",
                    url: "/student/reviews",
                },
            ],
        },
    ],
    tutorNav: [
        {
            title: "Tutor Dashboard",
            url: "/tutor/dashboard",
            icon: Bot,
            items: [
                {
                    title: "Manage Profile",
                    url: "/tutor/profile",
                },
                {
                    title: "Booking Requests",
                    url: "/tutor/requests",
                },
                {
                    title: "Earnings",
                    url: "/tutor/earnings",
                },
                {
                    title: "Subject Management",
                    url: "\tutor/subjects",
                },
                {
                    title: "Availability Slots",
                    url: "/tutor/availability",
                },
            ],
        },
    ],
    checkoutNav: [
        {
            title: "Checkout",
            url: "/checkout",
            icon: Settings,
            items: [
                {
                    title: "Secure Payment",
                    url: "/checkout/payment",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { user, setIsLoading } = useUser();
    
    const navItems = user?.role === "student" ? data.studentNav : data.tutorNav;

    return (
        <Sidebar collapsible="icon" variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div className="flex items-center justify-center">
                                    Logo
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <h2 className="font-bold text-xl">TutorLink</h2>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={[...navItems, ...data.checkoutNav]} />
            </SidebarContent>
            <SidebarFooter>
                {/* <NavUser /> */}
            </SidebarFooter>
        </Sidebar>
    );
}
