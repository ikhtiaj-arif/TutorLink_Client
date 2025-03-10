'use client';

import { Button } from '@/components/ui/button';

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-b from-orange-50 to-orange-100 py-40 rounded-3xl">
            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left lg:w-1/2 ">
                    <div className='pl-6 md:pl-0'>
                        {/* Header */}
                        <h3 className="text-2xl font-bold text-gray-900 sm:text-5xl">
                            Find the perfect tutor
                        </h3>
                        <div>
                            <p className="mt-4 text-lg  font-semibold text-gray-600">
                                Quality math tutoring near me at your fingertips
                            </p>
                        </div>
                        <div>
                            <p className=" text-lg   font-semibold text-gray-600">
                                542,568 tutors available
                            </p>
                        </div>
                        <div>
                            <p className=" text-lg font-semibold text-gray-600">s
                                Verified reviews
                            </p>
                        </div>
                        <div>
                            <p className=" text-lg font-semibold text-gray-600">
                                Secure payment
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">

                        <div className="flex items-center justify-center space-x-4 bg-white p-4 rounded-md shadow-lg">
                            {/* Icon */}
                            <div className="flex items-center justify-center text-gray-500">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h7m-3-3l3 3-3 3m-4-5H3m6 4H3" />
                                </svg>
                            </div>

                            {/* Input Fields */}
                            <input
                                className="focus:outline-none px-3 border-none rounded-md w-full"
                                placeholder="Mathematics"
                            />



                            <Button variant="default" className="px-6 py-3 text-lg rounded-xl">
                                Search
                            </Button>

                        </div>
                    </div>
                </div>









                {/* Key Features */}


                {/* Call-to-Action Buttons
                <div className="mt-16 flex justify-center space-x-6">
                    <Link href="/register/student">
                        <Button variant="outline" className="rounded-full text-primary hover:bg-primary hover:text-white">
                            Sign Up as a Student
                        </Button>
                    </Link>
                    <Link href="/register/tutor">
                        <Button variant="outline" className="rounded-full text-primary hover:bg-primary hover:text-white">
                            Register as a Tutor
                        </Button>
                    </Link>
                </div> */}
            </div>
        </section >
    );
};

export default HeroSection;
