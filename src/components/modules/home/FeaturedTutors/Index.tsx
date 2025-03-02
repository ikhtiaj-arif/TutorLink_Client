// components/FeaturedTutors.tsx
'use client';

import TutorCard from "@/components/ui/core/TutorCard";
import { ITutor } from "@/types";



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
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900">Featured Tutors</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tutors.map((tutor) => (
                        <TutorCard key={tutor.id} tutor={tutor} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedTutors;
