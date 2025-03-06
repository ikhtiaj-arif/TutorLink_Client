/* eslint-disable react/no-unescaped-entities */
// components/AboutUsPage.tsx


const AboutUsPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">About Us</h1>

            {/* Mission Statement Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600">
                    At TutorLink, our mission is to connect students with qualified and passionate tutors who can help them succeed in their academic journeys. We strive to provide a platform that empowers both students and tutors, making learning accessible and engaging. We believe that education should be personalized, and we are committed to matching each student with the right tutor to meet their individual needs.
                </p>
            </div>

            {/* Team Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Founder 1"
                            className="w-32 h-32 rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
                        <p className="text-gray-600">Co-Founder & CEO</p>
                        <p className="text-gray-500 mt-2">
                            Jane is passionate about education and technology. With over 10 years of experience in the tech and education sectors, she founded TutorLink to make high-quality tutoring accessible to students around the world.
                        </p>
                    </div>

                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Founder 2"
                            className="w-32 h-32 rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
                        <p className="text-gray-600">Co-Founder & CTO</p>
                        <p className="text-gray-500 mt-2">
                            John brings his expertise in technology and innovation to the platform. His goal is to ensure TutorLink’s platform is intuitive, efficient, and scalable for students and tutors alike.
                        </p>
                    </div>

                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Founder 3"
                            className="w-32 h-32 rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">Emily Clark</h3>
                        <p className="text-gray-600">Co-Founder & COO</p>
                        <p className="text-gray-500 mt-2">
                            Emily’s background in operations and management ensures that TutorLink runs smoothly and efficiently. She oversees daily operations and ensures both students and tutors have the best experience on the platform.
                        </p>
                    </div>
                </div>
            </div>

            {/* Success Stories Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Success Stories</h2>
                <div className="space-y-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 italic">
                            "I struggled with algebra for months, but after just a few sessions with my TutorLink tutor, I finally started understanding the concepts. The personalized approach made all the difference!"
                        </p>
                        <p className="text-gray-800 mt-2 font-semibold">Sarah K., High School Student</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 italic">
                            "As a tutor, TutorLink has allowed me to connect with motivated students who are truly invested in their learning. The platform makes it easy to schedule sessions and manage everything from one place."
                        </p>
                        <p className="text-gray-800 mt-2 font-semibold">Mark T., Math Tutor</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 italic">
                            "TutorLink was a game-changer for me. I found a tutor who helped me prepare for my SATs, and I improved my score by 250 points. It’s the best decision I’ve made for my education!"
                        </p>
                        <p className="text-gray-800 mt-2 font-semibold">James W., SAT Student</p>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600">
                    TutorLink’s vision is to create a global network of qualified tutors and eager learners, breaking down barriers to education. In the future, we plan to expand our platform to include a wider range of subjects, languages, and teaching styles. We aim to serve students worldwide and foster a love for learning that transcends geographical limitations.
                </p>
            </div>
        </div>
    );
};

export default AboutUsPage;
