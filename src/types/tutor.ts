
export interface ITutor {
    id: string;
    name: string;
    location: string;
    subject: string;
    price: string;
    rating: number;
    reviews: number;
    imgUrl: string;
    badge?: string;
    firstLessonFree: boolean;
    availability: string;
}
// types/tutor.ts

export interface TutorDetails {
    id: string;
    name: string;
    location: string;
    subject: string; // Can be a comma-separated string or an array of subjects
    price: string;
    rating: number;
    reviews: number;
    imgUrl: string;
    responseTime: string; // e.g., '1h', '2h', '3 days', etc.
    numberOfStudents: number;
    description: string; // Detailed description of the tutor's services
    firstLessonFree: boolean;
    reviewsList: Review[]; // List of reviews from students
    videoUrl: string; // URL to the tutor's video
}

export interface Review {
    name: string;
    review: string;
}
