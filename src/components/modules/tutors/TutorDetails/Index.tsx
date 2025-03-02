// components/TutorDetailsPage.tsx
'use client';

import { useState } from 'react';
// Assuming TutorDetails type is defined
import { Calendar } from 'lucide-react'; // Calendar icon for booking
import { TutorDetails } from '@/types';
import TutorFloatingCard from '../TutorFloatingCard/Iindex';


const TutorDetailsPage = ({ tutor }: { tutor: TutorDetails }) => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    // Handle date selection for the calendar
    const handleDateSelect = (date: string) => {
        setSelectedDate(date);
    };
    const handleContactClick = () => {
      console.log("Contact button clicked");
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <TutorFloatingCard name="Luisa"
                imageUrl="https://via.placeholder.com/150"
                rating={5}
                reviews={45}
                hourlyRate="$80/h"
                responseTime="1h"
                numberOfStudents="50+"
                onContact={handleContactClick}
            />
                <div className="lg:col-span-1">
                    <div className="flex items-center mb-6">
                        <img src={tutor.imgUrl} alt={tutor.name} className="w-32 h-32 rounded-full object-cover" />
                        <div className="ml-6">
                            <h1 className="text-3xl font-semibold">{tutor.name}</h1>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-400">★</span>
                                <span className="ml-1 text-lg">{tutor.rating}</span>
                                <span className="text-gray-500">({tutor.reviews} reviews)</span>
                            </div>
                            <p className="mt-2 text-lg font-semibold">{tutor.price}</p>
                            {tutor.firstLessonFree && (
                                <span className="inline-block mt-2 text-sm text-green-500">1st Lesson Free</span>
                            )}
                        </div>
                    </div>
                    
                    {/* Tutor Bio */}
                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold">About {tutor.name}</h3>
                        <p className="text-gray-600 mt-2">{tutor.description}</p>
                    </div>

                    {/* Subjects Taught */}
                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold">Subjects Taught</h3>
                        <ul className="text-gray-600 mt-2">
                            {tutor.subject.split(',').map((subject, index) => (
                                <li key={index}>{subject}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-8">
                        <button className="bg-pink-500 text-white py-2 px-6 rounded-lg w-full">Request Tutoring</button>
                    </div>
                </div>

                {/* Tutor Lesson Details Section */}
                <div className="lg:col-span-2">
                    {/* Reviews Section */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
                        {tutor.reviewsList.map((review, index) => (
                            <div key={index} className="mb-4">
                                <p className="font-semibold">{review.name}</p>
                                <p className="text-gray-600">{review.review}</p>
                            </div>
                        ))}
                    </div>

                    {/* Rates Section */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">Rates</h3>
                        <p className="text-gray-600">Hourly Rate: {tutor.price}</p>
                        <p className="text-gray-600">Online Lessons: {tutor.price}</p>
                        <p className="text-gray-600 mt-2">Pack Rates: $400 (5 sessions), $800 (10 sessions)</p>
                    </div>

                    {/* Calendar Section */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">Booking Calendar</h3>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <div className="text-center">
                                <Calendar className="text-pink-500 w-8 h-8 mx-auto" />
                                <p className="mt-2 text-gray-600">Select your preferred date:</p>
                                {/* Dummy calendar UI (in real-world scenario, use a calendar library or custom component) */}
                                <div className="mt-4 grid grid-cols-7 gap-4 text-center">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                                        <button
                                            key={index}
                                            className={`p-2 rounded-lg ${selectedDate === day ? 'bg-pink-500 text-white' : 'bg-white text-gray-600'}`}
                                            onClick={() => handleDateSelect(day)}
                                        >
                                            {day}
                                        </button>
                                    ))}
                                </div>
                                {selectedDate && <p className="mt-4 text-gray-600">You selected: {selectedDate}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-2">Video Introduction</h3>
                        <div className="relative pb-56.25% mb-4">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={tutor.videoUrl}
                                title={`${tutor.name}'s Introduction`}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Tutors Section */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-4">Other Tutors in {tutor.subject}</h3>
                <div className="flex space-x-6 overflow-x-auto">
                    {/* Example other tutors */}
                    <div className="w-40 bg-white rounded-lg shadow-lg p-4">
                        <img src="https://via.placeholder.com/150" alt="Joshua" className="w-32 h-32 rounded-full object-cover mx-auto" />
                        <h4 className="text-xl text-center font-semibold">Joshua</h4>
                        <p className="text-center text-gray-500">Singing Tutor</p>
                    </div>
                    {/* Repeat for more tutors */}
                </div>
            </div>
        </div>
    );
};

export default TutorDetailsPage;
