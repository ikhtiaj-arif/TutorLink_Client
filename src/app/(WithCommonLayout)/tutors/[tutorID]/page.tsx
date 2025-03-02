// types/tutor.ts

import TutorDetail from "@/components/modules/tutors/TutorDetails/Index";

export interface TutorDetails {
    id: string;
    name: string;
    location: string;
    subject: string;
    price: string;
    rating: number;
    reviews: number;
    imgUrl: string;
    responseTime: string; // e.g., '1h', '2h', '3 days', etc.
    numberOfStudents: number;
    description: string; // Detailed description of the tutor's services
    firstLessonFree: boolean;
    reviewsList: Review[];
    videoUrl: string; // URL for the tutor's video
}

export interface Review {
    name: string;
    review: string;
}


// Dummy tutor data
const dummyTutorData = {
    id: '1',
    name: 'Luisa',
    location: 'Online',
    subject: 'Singing, Guitar, Music Theory',
    price: '$80/h',
    rating: 5,
    reviews: 150,
    imgUrl: 'https://via.placeholder.com/150',
    responseTime: '1h',
    numberOfStudents: 50,
    description: 'Berklee Alumni Gives Singing, Guitar, Music Theory and Harmony Lessons ONLINE only / Always accepting new students / Se habla Español e Inglés',
    firstLessonFree: true,
    reviewsList: [
        { name: 'Tara', review: 'Perfect! I can\'t believe how much progress I\'ve made in the four lessons I\'ve had with Luisa.' },
        { name: 'Evelyn', review: 'Perfect! Very knowledgeable and personable! 10/10' },
        { name: 'Noah', review: 'Perfect! Luisa was awesome. Super friendly, down to earth, and knows her stuff.' },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
};

// Dummy function to simulate fetching tutor data by ID
const getTutorById = (tutorID: string): TutorDetails | null => {
    // Simulating API call to fetch data based on tutorID
    if (tutorID === '1') {
        return dummyTutorData;
    }
    return null;  // Return null if tutor not found
};

// Server component that fetches data based on tutorID
const TutorDetailsPage = async ({ params }: { params: { tutorID: string } }) => {
    const { tutorID } = params;

    // Fetch the tutor data (Using dummy data for now)
    const tutor: TutorDetails | null = getTutorById(tutorID);

    if (!tutor) {
        return <div>Tutor not found</div>;
    }

    return (
       <div>
        <TutorDetail tutor={tutor} />
       </div>
    );
};

// Export the dummy function to simulate fetching tutor data
// Future use for fetching real data from a database or API
// export async function getTutorById(tutorID: string): Promise<Tutor | null> {
//     // Replace this with actual API call logic
//     if (tutorID === '1') {
//         return dummyTutorData;
//     }
//     return null; // Return null if tutor not found
// }

export default TutorDetailsPage;
