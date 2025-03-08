// components/AllTutors.tsx
'use client';

import TutorCard from '@/components/ui/core/TutorCard';
import { ITutor } from '@/types';
import { useState } from 'react';


const AllTutors = () => {
    const [filter, setFilter] = useState({
        subject: '',
        rating: 0,
        price: 0,
        availability: '',
        location: '',
    });

    const [sort, setSort] = useState('relevance'); // Default sort by relevance

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
        // More tutors can be added here...
    ];

    // Filter tutors based on selected criteria
    const filteredTutors = tutors.filter((tutor) => {
        return (
            (filter.subject ? tutor.subject.includes(filter.subject) : true) &&
            (filter.rating ? tutor.rating >= filter.rating : true) &&
            (filter.price ? parseInt(tutor.price.replace('$', '').replace('/h', '')) <= filter.price : true) &&
            (filter.availability ? tutor.availability.includes(filter.availability) : true) &&
            (filter.location ? tutor.location.includes(filter.location) : true)
        );
    });

    // Sort tutors based on selected sort option
    const sortedTutors = filteredTutors.sort((a, b) => {
        switch (sort) {
            case 'rating':
                return b.rating - a.rating;
            case 'price-low-high':
                return parseInt(a.price.replace('$', '').replace('/h', '')) - parseInt(b.price.replace('$', '').replace('/h', ''));
            case 'price-high-low':
                return parseInt(b.price.replace('$', '').replace('/h', '')) - parseInt(a.price.replace('$', '').replace('/h', ''));
            case 'newest':
                return 0; // Can implement more sophisticated sorting logic here
            default:
                return 0;
        }
    });

    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Explore Our Tutors</h2>

                {/* Filter Section */}
                <div className="flex gap-6 mb-6">
                    <select
                        value={filter.subject}
                        onChange={(e) => setFilter({ ...filter, subject: e.target.value })}
                        className="p-2 border rounded"
                    >
                        <option value="">Select Subject</option>
                        <option value="Tennis">Tennis</option>
                        {/* Add other subjects as options */}
                    </select>

                    <select
                        value={filter.rating}
                        onChange={(e) => setFilter({ ...filter, rating: parseInt(e.target.value) })}
                        className="p-2 border rounded"
                    >
                        <option value={0}>Min Rating</option>
                        <option value={5}>5 Stars</option>
                        <option value={4}>4 Stars</option>
                    </select>

                    <select
                        value={filter.price}
                        onChange={(e) => setFilter({ ...filter, price: parseInt(e.target.value) })}
                        className="p-2 border rounded"
                    >
                        <option value={0}>Max Price</option>
                        <option value={50}>$50</option>
                        <option value={100}>$100</option>
                        <option value={200}>$200</option>
                    </select>

                    <select
                        value={filter.availability}
                        onChange={(e) => setFilter({ ...filter, availability: e.target.value })}
                        className="p-2 border rounded"
                    >
                        <option value="">Availability</option>
                        <option value="Weekdays">Weekdays</option>
                        <option value="Weekends">Weekends</option>
                    </select>

                    <select
                        value={filter.location}
                        onChange={(e) => setFilter({ ...filter, location: e.target.value })}
                        className="p-2 border rounded"
                    >
                        <option value="">Location</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Palm Desert">Palm Desert</option>
                    </select>
                </div>

                {/* Sort Section */}
                <div className="mb-8">
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="p-2 border rounded"
                    >
                        <option value="relevance">Sort by Relevance</option>
                        <option value="rating">Sort by Rating</option>
                        <option value="price-low-high">Sort by Price (Low to High)</option>
                        <option value="price-high-low">Sort by Price (High to Low)</option>
                        <option value="newest">Sort by Newest</option>
                    </select>
                </div>

                {/* Display Tutors or Show Message if No Tutors Found */}
                {sortedTutors.length === 0 ? (
                    <div className="text-center text-lg text-gray-700">
                        No tutors found matching your criteria. Please adjust your filters.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedTutors.map((tutor) => (
                            <TutorCard key={tutor.id} tutor={tutor} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllTutors;
