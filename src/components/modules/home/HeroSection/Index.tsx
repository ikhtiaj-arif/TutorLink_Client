'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Info } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-b from-pink-100 to-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Header */}
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Find the perfect tutor
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Search by subject, grade, or tutor name to find the best tutor for you!
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mt-10 flex justify-center">
                    <div className="w-full max-w-4xl flex items-center space-x-4">
                        <Input
                            placeholder="Try 'Math', 'English', or 'Public speaking'"
                            className="w-full py-3 px-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
                        />
                        <Button variant="default" className="px-6 py-3 bg-pink-500 text-white rounded-lg">
                            Search
                        </Button>
                    </div>
                </div>

                {/* Key Features */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="text-center">
                        <Info className="mx-auto text-4xl text-pink-500" />
                        <h3 className="mt-4 text-xl font-semibold">Find Tutors Fast</h3>
                        <p className="mt-2 text-gray-600">Quickly search for tutors by subjects, ratings, and more.</p>
                    </div>
                    <div className="text-center">
                        <Info className="mx-auto text-4xl text-pink-500" />
                        <h3 className="mt-4 text-xl font-semibold">Secure Payments</h3>
                        <p className="mt-2 text-gray-600">Pay securely for your sessions with confidence.</p>
                    </div>
                    <div className="text-center">
                        <Info className="mx-auto text-4xl text-pink-500" />
                        <h3 className="mt-4 text-xl font-semibold">Verified Profiles</h3>
                        <p className="mt-2 text-gray-600">Each tutor is verified to ensure quality education.</p>
                    </div>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="mt-16 flex justify-center space-x-6">
                    <Link href="/register/student">
                        <Button variant="outline" className="rounded-full text-pink-500 hover:bg-pink-500 hover:text-white">
                            Sign Up as a Student
                        </Button>
                    </Link>
                    <Link href="/register/tutor">
                        <Button variant="outline" className="rounded-full text-pink-500 hover:bg-pink-500 hover:text-white">
                            Register as a Tutor
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
