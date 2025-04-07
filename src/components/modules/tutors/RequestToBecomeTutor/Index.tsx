'use client';

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import TLImageUploader from "@/components/ui/core/TLImageUploader";
import ImagePreviewer from "@/components/ui/core/TLImageUploader/ImagePreviewer";
import { useUser } from "@/context/UserContext";
import { addTutor } from "@/services/Tutor/Index";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RequestToBecomeTutorForm() {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);
    const { user, setUser } = useUser();
    const router = useRouter();

    // Initialize form with validation
    const form = useForm({});
    const { formState: { isSubmitting, isValid }, handleSubmit, control, watch } = form;

    const confirmation = watch("confirmation");  // Watch for confirmation checkbox state

    const isFormValid = isValid && confirmation;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const formData = new FormData();
            const userId = user?.userId as string;
            const dataObject = {
                user: userId,
                location: data.location,
                rate: data.rate,
                badge: data.badge,
                responseTime: data.responseTime,
                about: data.about,
                aboutLesson: data.aboutLesson,
                intro: data.intro,
                firstLessonFree: data.firstLessonFree,
                reviews: JSON.stringify(data.reviews), // Reviews as a stringified array
            };

            formData.append("data", JSON.stringify(dataObject)); // Add the data object

            // Add image files
            imageFiles.forEach((file) => formData.append("images", file));

            // Send the formData to backend service
            const res = await addTutor(formData);
            if (res) {
                toast.success("Profile submitted successfully!");
                router.push('/');
            }
        } catch (err) {
            toast.error("Failed to submit profile");
        }
    };

    return (
        <div className="border-2 rounded-xl flex-grow max-w-2xl mx-auto p-5 my-5">
            <h1 className="text-2xl font-semibold text-center mb-6">Request to Become a Tutor</h1>
            <p className="font-extralight text-sm text-gray-600 text-center mb-6">
                Fill out the form to request becoming a tutor. Please ensure all information is accurate.
            </p>

            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {/* Location Input */}
                        <FormField control={control} name="location" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl><Input {...field} placeholder="Enter your location" className="border-gray-300" /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={control} name="rate" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hourly Rate</FormLabel>
                                <FormControl><Input {...field} placeholder="Enter your rate" className="border-gray-300" /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={control} name="responseTime" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Response Time</FormLabel>
                                <FormControl><Input {...field} placeholder="Enter response time" className="border-gray-300" /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>

                    {/* About Section */}
                    <FormField control={control} name="about" render={({ field }) => (
                        <FormItem>
                            <FormLabel>About</FormLabel>
                            <FormControl><Textarea className="h-24 border-gray-300" {...field} placeholder="About you" /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={control} name="aboutLesson" render={({ field }) => (
                        <FormItem>
                            <FormLabel>About Lessons</FormLabel>
                            <FormControl><Textarea className="h-24 border-gray-300" {...field} placeholder="About your lessons" /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={control} name="intro" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Introduction</FormLabel>
                            <FormControl><Textarea className="h-24 border-gray-300" {...field} placeholder="Introduction to your tutoring" /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    {/* First Lesson Free Checkbox */}
                    <FormField control={control} name="firstLessonFree" render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                            <FormLabel className="flex items-center">
                                <Input
                                    type="checkbox"
                                    {...field}
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                    className="mr-2"
                                />
                                <span>First Lesson Free</span>
                            </FormLabel>
                            <FormMessage />
                        </FormItem>
                    )} />

                    {/* Confirmation Checkbox */}
                    <FormField control={control} name="confirmation" render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                            <FormLabel className="flex items-center">
                                <Input
                                    type="checkbox"
                                    {...field}
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                    className="mr-2"
                                />
                                <span>
                                    I understand that my request will be reviewed by admins and I may not be eligible.
                                </span>
                            </FormLabel>
                            <FormMessage />
                        </FormItem>
                    )} />

                    {/* Image Upload Section */}
                    <div className="mt-4">
                        {imagePreview?.length > 0 ? (
                            <ImagePreviewer setImageFiles={setImageFiles} imagePreview={imagePreview} setImagePreview={setImagePreview} />
                        ) : (
                            <TLImageUploader setImageFiles={setImageFiles} setImagePreview={setImagePreview} />
                        )}
                    </div>

                    <div className="md:w-1/2 mx-auto mt-6">
                        <Button type="submit" className="w-full bg-primary text-white py-3 rounded-md" disabled={!isFormValid}>
                            {isSubmitting ? "Requesting..." : "Request to Become a Tutor"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
