'use client';

import { ITutor } from '@/types';
import { Star } from 'lucide-react';
import Image from 'next/image';
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
        <div onClick={handleProfileRedirect} className="bg-background overflow-hidden cursor-pointer w-[87%] mx-auto max-w-sm">
            {/* Profile Image */}
            <div className="relative">
                <Image
                    src={tutor.imageUrls[0]} // Replace with the path to your uploaded image
                    alt={tutor?.user.name}
                    width={200}
                    height={200}
                    className="w-full h-[16rem] object-cover rounded-2xl"
                />
                <div className='absolute bottom-2 left-6'>

                    <h3 className="text-xl font-semibold text-white">{tutor?.user.name}</h3>
                    <h3 className="text-lg  text-white">{tutor.location}   {"("}<span className="text-gray-200 mt-1">{tutor.subject}</span>{")"}</h3>
                </div>
            </div>

            {/* Tutor Info */}
            <div className="px-6 py-1">
                <div className="flex items-center justify-between">

                    <div className="flex items-center">
                        <Star className="text-yellow-400" />
                        <span className="ml-1 text-gray-600">{tutor.reviews}</span>
                    </div>
                    <div className="bg-accent text-black text-sm px-2 py-1 rounded-xl">Ambassador</div>
                </div>
                <p className=" mt-1">{tutor.aboutLesson}</p>
                <div className='flex justify-between'>

                    <p className="text-gray-900 font-semibold mt-2">{tutor.rate}</p>

                    {tutor.firstLessonFree && (
                        <span className="inline-block mt-2 text-sm text-green-500">1st Lesson Free</span>
                    )}
                </div>
            </div>

            {/* Badge and View Profile Button */}
            {/* <div className="px-6 pb-6">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{tutor.badge}</span>
                    <button
                        onClick={handleProfileRedirect}
                        className="px-6 py-2 bg-primary text-white text-sm rounded-lg"
                    >
                        View Profile
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default TutorCard;
