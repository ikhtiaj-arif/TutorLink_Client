// components/FeaturedTutors.tsx
'use client';

import { Button } from "@/components/ui/button";
import TLContainer from "@/components/ui/core/TLContainer";
import TutorCard from "@/components/ui/core/TutorCard";
import { ITutor } from "@/types";
import { ArrowBigRightIcon } from "lucide-react";
import Link from "next/link";




const FeaturedTutors = () => {
    const tutors: ITutor[] = [
        {
            id: '1',
            name: 'Eric',
            location: 'New York',
            subject: 'Tennis',
            price: '$200/h',
            rating: 5,
            reviews: 6,
            imgUrl: 'https://via.placeholder.com/150',
            firstLessonFree: true,
            availability: 'Weekdays',
        },
        {
            id: '2',
            name: 'Austin',
            location: 'Los Angeles',
            subject: 'Tennis',
            price: '$75/h',
            rating: 5,
            reviews: 4,
            imgUrl: 'https://via.placeholder.com/150',
            firstLessonFree: true,
            availability: 'Weekends',
        },
        {
            id: '3',
            name: 'Josiah',
            location: 'Palm Desert',
            subject: 'Tennis',
            price: '$100/h',
            rating: 5,
            reviews: 2,
            imgUrl: 'https://via.placeholder.com/150',
            firstLessonFree: true,
            availability: 'Weekdays',
        },
        {
            id: '4',
            name: 'Josiah',
            location: 'Palm Desert',
            subject: 'Tennis',
            price: '$100/h',
            rating: 5,
            reviews: 2,
            imgUrl: 'https://via.placeholder.com/150',
            firstLessonFree: true,
            availability: 'Weekdays',
        },
        {
            id: '5',
            name: 'Josiah',
            location: 'Palm Desert',
            subject: 'Tennis',
            price: '$100/h',
            rating: 5,
            reviews: 2,
            imgUrl: 'https://via.placeholder.com/150',
            firstLessonFree: true,
            availability: 'Weekdays',
        },
        {
            id: '6',
            name: 'Josiah',
            location: 'Palm Desert',
            subject: 'Tennis',
            price: '$100/h',
            rating: 5,
            reviews: 2,
            imgUrl: 'https://via.placeholder.com/150',
            firstLessonFree: true,
            availability: 'Weekdays',
        },
    ];

    return (
        <TLContainer className="pt-32">
            <section className=" bg-background">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-left text-gray-900">Learn with the help of one of our expert teachers</h2>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {tutors.map((tutor) => (
                            <TutorCard key={tutor.id} tutor={tutor} />
                        ))}
                    </div>
                </div>
                <div className="w-full  flex justify-center items-center mt-28">

                    <Link href={'/tutors'}>
                        <Button variant='default' className="text-md font-[600]  px-8 py-3 rounded-full">See more tutors <ArrowBigRightIcon /> </Button>
                    </Link>
                </div>
            </section>
        </TLContainer>
    );
};

export default FeaturedTutors;
