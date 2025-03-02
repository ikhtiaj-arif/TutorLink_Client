'use client';

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
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tutoring</h2>
                    <div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700"
                                onClick={() => toggleAccordion(0)}
                            >
                                How do I find a tutor?
                            </button>
                            {activeIndex === 0 && (
                                <div className="py-2 px-4 text-gray-600">
                                    You can find tutors by searching through the platform’s tutor directory. Use the search bar and filter by subject, rating, price, and availability to find the best match for your needs.
                                </div>
                            )}
                        </div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700"
                                onClick={() => toggleAccordion(1)}
                            >
                                Can I choose a tutor based on availability?
                            </button>
                            {activeIndex === 1 && (
                                <div className="py-2 px-4 text-gray-600">
                                    Yes! You can filter tutors based on their availability, ensuring that you find a tutor who fits into your schedule.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Payments Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payments</h2>
                    <div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700"
                                onClick={() => toggleAccordion(2)}
                            >
                                How are payments processed?
                            </button>
                            {activeIndex === 2 && (
                                <div className="py-2 px-4 text-gray-600">
                                    Payments are processed securely through third-party payment providers like Stripe, PayPal, or SSLCommerz. You can pay for sessions individually or in packages, and all transactions are encrypted for your safety.
                                </div>
                            )}
                        </div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700"
                                onClick={() => toggleAccordion(3)}
                            >
                                Can I cancel a session?
                            </button>
                            {activeIndex === 3 && (
                                <div className="py-2 px-4 text-gray-600">
                                    Yes, you can cancel a session according to the platform’s cancellation policy. Please check with your tutor for specific cancellation terms.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Account Management Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Management</h2>
                    <div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700"
                                onClick={() => toggleAccordion(4)}
                            >
                                How do I reset my password?
                            </button>
                            {activeIndex === 4 && (
                                <div className="py-2 px-4 text-gray-600">
                                    To reset your password, go to the login page and click on &quot;Forgot Password&quot;. You will receive an email with instructions on how to reset your password.
                                </div>
                            )}
                        </div>
                        <div className="border-b">
                            <button
                                className="w-full text-left py-3 px-4 text-lg font-semibold text-gray-700"
                                onClick={() => toggleAccordion(5)}
                            >
                                How do I update my account information?
                            </button>
                            {activeIndex === 5 && (
                                <div className="py-2 px-4 text-gray-600">
                                    You can update your account details by visiting your account settings. From there, you can update your personal information, payment methods, and more.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQComponent;
