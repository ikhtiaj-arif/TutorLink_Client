// components/TutorCard.tsx
'use client';

import { ITutor } from '@/types';
import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';


interface TutorCardProps {
    tutor: ITutor;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
    const router = useRouter();

    const handleProfileRedirect = () => {
        // Redirect to dynamic route for tutor profile
        router.push(`/tutors/${tutor.id}`);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={tutor.imgUrl} alt={tutor.name} className="w-full h-56 object-cover" />
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800">{tutor.name}</h3>
                    <div className="flex items-center">
                        <Star className="text-yellow-400" />
                        <span className="ml-1 text-gray-600">{tutor.rating}</span>
                    </div>
                </div>
                <p className="text-gray-600">{tutor.subject} - {tutor.location}</p>
                <p className="text-gray-900 font-semibold mt-2">{tutor.price}</p>
                <p className="text-gray-500 mt-1">{tutor.reviews} reviews</p>
                {tutor.firstLessonFree && (
                    <span className="inline-block mt-2 text-sm text-green-500">1st Lesson Free</span>
                )}
            </div>
            <div className="px-6 pb-6">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{tutor.badge}</span>
                    <button
                        onClick={handleProfileRedirect}
                        className="px-6 py-2 bg-primary text-white text-sm rounded-lg"
                    >
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;
