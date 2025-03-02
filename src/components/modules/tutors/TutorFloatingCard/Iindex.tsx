// components/TutorDetailCard.tsx
'use client';

import { Heart } from 'lucide-react';

interface TutorDetailCardProps {
    name: string;
    imageUrl: string;
    rating: number;
    reviews: number;
    hourlyRate: string;
    responseTime: string;
    numberOfStudents: string;
    onContact: () => void;
}

const TutorFloatingCard: React.FC<TutorDetailCardProps> = ({
    name,
    imageUrl,
    rating,
    reviews,
    hourlyRate,
    responseTime,
    numberOfStudents,
    onContact,
}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-64">
            <div className="flex flex-col items-center">
                <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full object-cover" />
                <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                    <div className="flex items-center justify-center mt-2">
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1 text-sm text-gray-500">{rating} ({reviews} reviews)</span>
                    </div>
                    <div className="mt-2 text-gray-600">
                        <p>Hourly rate: <span className="font-semibold">{hourlyRate}</span></p>
                        <p>Response Time: <span className="font-semibold">{responseTime}</span></p>
                        <p>Students: <span className="font-semibold">{numberOfStudents}</span></p>
                    </div>
                    <div className="flex justify-between items-center mt-4 w-full">
                        <button
                            onClick={onContact}
                            className="bg-pink-500 text-white py-2 px-6 rounded-full w-full text-center"
                        >
                            Contact
                        </button>
                        <Heart className="text-gray-500 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorFloatingCard;
