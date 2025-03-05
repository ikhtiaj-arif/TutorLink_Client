'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Award, ChevronDown, ChevronUp, FileText, Lightbulb } from 'lucide-react';
import { useState } from 'react';

const FAQComponent = () => {
    // State to manage active section
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">Frequently Asked Questions</h1>

            {/* FAQ Categories */}
            <div className="space-y-8">
                {/* Tutoring Section */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                        <Lightbulb size={28} className="text-yellow-500" />
                        <h2 className="text-2xl font-semibold text-gray-800">Tutoring</h2>
                    </div>
                    <div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700 flex justify-between items-center"
                                onClick={() => toggleAccordion(0)}
                            >
                                <span className="flex items-center space-x-2">
                                    <Lightbulb size={20} className="text-yellow-500" />
                                    <span>How do I find a tutor?</span>
                                </span>
                                {activeIndex === 0 ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === 0 && (
                                    <motion.div
                                        className="py-2 px-4 text-gray-600"
                                        initial={{ opacity: 0, maxHeight: 0 }}
                                        animate={{ opacity: 1, maxHeight: 500 }}
                                        exit={{ opacity: 0, maxHeight: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        style={{ overflow: 'hidden' }} // Hide content overflow
                                    >
                                        You can find tutors by searching through the platform’s tutor directory. Use the search bar and filter by subject, rating, price, and availability to find the best match for your needs.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700 flex justify-between items-center"
                                onClick={() => toggleAccordion(1)}
                            >
                                <span className="flex items-center space-x-2">
                                    <Lightbulb size={20} className="text-yellow-500" />
                                    <span>Can I choose a tutor based on availability?</span>
                                </span>
                                {activeIndex === 1 ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === 1 && (
                                    <motion.div
                                        className="py-2 px-4 text-gray-600"
                                        initial={{ opacity: 0, maxHeight: 0 }}
                                        animate={{ opacity: 1, maxHeight: 500 }}
                                        exit={{ opacity: 0, maxHeight: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        style={{ overflow: 'hidden' }} // Hide content overflow
                                    >
                                        Yes! You can filter tutors based on their availability, ensuring that you find a tutor who fits into your schedule.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 my-4">
                        <Award size={28} className="text-red-500" />
                        <h2 className="text-2xl font-semibold text-gray-800">Payments</h2>
                    </div>
                    <div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700 flex justify-between items-center"
                                onClick={() => toggleAccordion(2)}
                            >
                                <span className="flex items-center space-x-2">
                                    <Award size={20} className="text-red-500" />
                                    <span>How are payments processed?</span>
                                </span>
                                {activeIndex === 2 ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === 2 && (
                                    <motion.div
                                        className="py-2 px-4 text-gray-600"
                                        initial={{ opacity: 0, maxHeight: 0 }}
                                        animate={{ opacity: 1, maxHeight: 500 }}
                                        exit={{ opacity: 0, maxHeight: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        style={{ overflow: 'hidden' }} // Hide content overflow
                                    >
                                        Payments are processed securely through third-party payment providers like Stripe, PayPal, or SSLCommerz. You can pay for sessions individually or in packages, and all transactions are encrypted for your safety.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700 flex justify-between items-center"
                                onClick={() => toggleAccordion(3)}
                            >
                                <span className="flex items-center space-x-2">
                                    <Award size={20} className="text-red-500" />
                                    <span>Can I cancel a session?</span>
                                </span>
                                {activeIndex === 3 ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === 3 && (
                                    <motion.div
                                        className="py-2 px-4 text-gray-600"
                                        initial={{ opacity: 0, maxHeight: 0 }}
                                        animate={{ opacity: 1, maxHeight: 500 }}
                                        exit={{ opacity: 0, maxHeight: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        style={{ overflow: 'hidden' }} // Hide content overflow
                                    >
                                        Yes, you can cancel a session according to the platform’s cancellation policy. Please check with your tutor for specific cancellation terms.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 my-4">
                        <FileText size={28} className="text-blue-500" />
                        <h2 className="text-2xl font-semibold text-gray-800">Account Management</h2>
                    </div>
                    <div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700 flex justify-between items-center"
                                onClick={() => toggleAccordion(4)}
                            >
                                <span className="flex items-center space-x-2">
                                    <FileText size={20} className="text-blue-500" />
                                    <span>How do I reset my password?</span>
                                </span>
                                {activeIndex === 4 ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === 4 && (
                                    <motion.div
                                        className="py-2 px-4 text-gray-600"
                                        initial={{ opacity: 0, maxHeight: 0 }}
                                        animate={{ opacity: 1, maxHeight: 500 }}
                                        exit={{ opacity: 0, maxHeight: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        style={{ overflow: 'hidden' }} // Hide content overflow
                                    >
                                        To reset your password, go to the login page and click on &quot;Forgot Password&quot;. You will receive an email with instructions on how to reset your password.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700 flex justify-between items-center"
                                onClick={() => toggleAccordion(5)}
                            >
                                <span className="flex items-center space-x-2">
                                    <FileText size={20} className="text-blue-500" />
                                    <span>How do I update my account information?</span>
                                </span>
                                {activeIndex === 5 ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === 5 && (
                                    <motion.div
                                        className="py-2 px-4 text-gray-600"
                                        initial={{ opacity: 0, maxHeight: 0 }}
                                        animate={{ opacity: 1, maxHeight: 500 }}
                                        exit={{ opacity: 0, maxHeight: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        style={{ overflow: 'hidden' }} // Hide content overflow
                                    >
                                        You can update your account details by visiting your account settings. From there, you can update your personal information, payment methods, and more.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Payments Section */}
                {/* <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                        <Award size={28} className="text-red-500" />
                        <h2 className="text-2xl font-semibold text-gray-800">Payments</h2>
                    </div>
                    <div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700 flex justify-between items-center"
                                onClick={() => toggleAccordion(2)}
                            >
                                <span className="flex items-center space-x-2">
                                    <Award size={20} className="text-red-500" />
                                    <span>How are payments processed?</span>
                                </span>
                                {activeIndex === 2 ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === 2 && (
                                    <motion.div
                                        className="py-2 px-4 text-gray-600"
                                        initial={{ opacity: 0, maxHeight: 0 }}
                                        animate={{ opacity: 1, maxHeight: 500 }}
                                        exit={{ opacity: 0, maxHeight: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        style={{ overflow: 'hidden' }} // Hide content overflow
                                    >
                                        Payments are processed securely through third-party payment providers like Stripe, PayPal, or SSLCommerz. You can pay for sessions individually or in packages, and all transactions are encrypted for your safety.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700 flex justify-between items-center"
                                onClick={() => toggleAccordion(3)}
                            >
                                <span className="flex items-center space-x-2">
                                    <Award size={20} className="text-red-500" />
                                    <span>Can I cancel a session?</span>
                                </span>
                                {activeIndex === 3 ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === 3 && (
                                    <motion.div
                                        className="py-2 px-4 text-gray-600"
                                        initial={{ opacity: 0, maxHeight: 0 }}
                                        animate={{ opacity: 1, maxHeight: 500 }}
                                        exit={{ opacity: 0, maxHeight: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        style={{ overflow: 'hidden' }} // Hide content overflow
                                    >
                                        Yes, you can cancel a session according to the platform’s cancellation policy. Please check with your tutor for specific cancellation terms.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div> */}

                {/* Account Management Section */}
                {/* <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                        <FileText size={28} className="text-blue-500" />
                        <h2 className="text-2xl font-semibold text-gray-800">Account Management</h2>
                    </div>
                    <div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700 flex justify-between items-center"
                                onClick={() => toggleAccordion(4)}
                            >
                                <span className="flex items-center space-x-2">
                                    <FileText size={20} className="text-blue-500" />
                                    <span>How do I reset my password?</span>
                                </span>
                                {activeIndex === 4 ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === 4 && (
                                    <motion.div
                                        className="py-2 px-4 text-gray-600"
                                        initial={{ opacity: 0, maxHeight: 0 }}
                                        animate={{ opacity: 1, maxHeight: 500 }}
                                        exit={{ opacity: 0, maxHeight: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        style={{ overflow: 'hidden' }} // Hide content overflow
                                    >
                                        To reset your password, go to the login page and click on &quot;Forgot Password&quot;. You will receive an email with instructions on how to reset your password.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700 flex justify-between items-center"
                                onClick={() => toggleAccordion(5)}
                            >
                                <span className="flex items-center space-x-2">
                                    <FileText size={20} className="text-blue-500" />
                                    <span>How do I update my account information?</span>
                                </span>
                                {activeIndex === 5 ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === 5 && (
                                    <motion.div
                                        className="py-2 px-4 text-gray-600"
                                        initial={{ opacity: 0, maxHeight: 0 }}
                                        animate={{ opacity: 1, maxHeight: 500 }}
                                        exit={{ opacity: 0, maxHeight: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        style={{ overflow: 'hidden' }} // Hide content overflow
                                    >
                                        You can update your account details by visiting your account settings. From there, you can update your personal information, payment methods, and more.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default FAQComponent;
