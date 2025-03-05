// components/ReviewCard.js

import { motion } from 'framer-motion';

export default function ReviewCard({ currentReview }) {
    return (
        <motion.div
            key={currentReview.id}
            className={`col-span-2 h-[300px]  bg-green-100 p-6 rounded-2xl shadow-lg flex flex-col relative`}
            initial={{ opacity: 0, x: '100%' }} // Start from the right side
            animate={{ opacity: 1, x: 0 }} // Animate to the center
            exit={{ opacity: 0, x: '-100%' }} // Slide out to the left
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full border-4 border-yellow-400 flex items-center justify-center">
                    {/* Avatar, you can use an image here */}
                    <span className="text-2xl font-bold text-white">{currentReview.name.charAt(0)}</span>
                </div>
                <div>
                    <p className="font-semibold text-xl">{currentReview.name}</p>
                    <p className="text-sm text-gray-600">{currentReview.role}</p>
                </div>
            </div>
            <p className="mt-4 text-base text-gray-700">{currentReview.reviewText}</p>
            <div className="mt-4 flex items-center space-x-1">
                {/* Stars */}
                <span className="text-yellow-400">★★★★★</span>
            </div>
        </motion.div>
    );
}
