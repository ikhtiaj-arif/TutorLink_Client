// components/ReviewSection.js
"use client"

import { motion } from 'framer-motion';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { useState } from 'react';
import ReviewCard from './ReviewCard';

// Review data
const reviews = [
    {
        id: 1,
        name: 'Cameron',
        role: 'Trumpet tutor',
        reviewText:
            'Very talented trombone player, with real passion for playing and also teaching. Very good with our 5th grader. Really good at efficiently conveying ideas to sharp kids. Good at helping identify missing fundamentals. Very good at.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Jackson',
        role: 'Mathematics tutor',
        reviewText: 'Jackson was great at helping my son with some tricky math tips. We are confident in him.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Alma',
        role: 'Science tutor',
        reviewText: 'Alma really helped me understand complex science concepts in a simple way. Highly recommend her!',
        rating: 5,
    },
];

export default function ReviewSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Go to next review
    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    // Go to previous review
    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };


    // Go to next review


    const currentReview = reviews[currentIndex];
    // const nextReviewData = reviews[(currentIndex + 1) % reviews.length];
    // 


    return (
        <div className="max-w-6xl  grid grid-cols-3 gap-10 mx-auto mt-16 px-6">
            <div className="col-span-1 flex flex-col gap-4 justify-center items-center">
                <motion.div
                    className="col-span-1 flex  flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <span className="text-yellow-500 text-3xl">★★★★★</span>
                    <h2 className="ml-4 text-3xl font-bold">The Perfect Match</h2>
                </motion.div>

                <div className=" flex items-center space-x-4">
                    <motion.div
                        className="cursor-pointer"
                        whileTap={{ scale: 0.9 }}
                        onClick={prevReview}
                    >
                        <ArrowBigLeft size={24} />
                    </motion.div>
                    <motion.div
                        className="cursor-pointer"
                        whileTap={{ scale: 0.9 }}
                        onClick={nextReview}
                    >
                        <ArrowBigRight size={24} />
                    </motion.div>
                </div>
            </div>

            <ReviewCard currentReview={currentReview} />
        </div>
    );
}
