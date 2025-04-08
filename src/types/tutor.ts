import { IUser } from "./user";

export interface ITutor {
  id: string;
  user: IUser;
  location: string;
  subject: string;
  aboutLesson: string;
  rate: string;
  rating: number;
  reviews: number;
  imageUrls: string;
  badge?: string;
  firstLessonFree: boolean;
  availability: string;
}
// types/tutor.ts

export interface TutorDetails {
  id: string;
  user?: IUser;
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

export interface TutorData {
  rate: string;
  reviews: string[];
  imageUrls: string[];
  badge: string | null;
  user: string; // User ID (should match the type used in your schema for `user`)
  responseTime: string;
  numberOfStudents: number;
  about: string;
  aboutLesson: string;
  intro: string;
  firstLessonFree?: boolean; // This is a boolean value for the checkbox
}
