"use client";

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

;

import TLImageUploader from "@/components/ui/core/TLImageUploader";
import ImagePreviewer from "@/components/ui/core/TLImageUploader/ImagePreviewer";
import { useState } from "react";
import { toast } from "sonner";


export default function UpdateTutorProfileForm({ tutorData }) {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>(tutorData?.imageUrls || []);

    const form = useForm({
        defaultValues: {
            location: tutorData?.location || "",
            rate: tutorData?.rate || "",
            responseTime: tutorData?.responseTime || "",
            numberOfStudents: tutorData?.numberOfStudents || 0,
            about: tutorData?.about || "",
            aboutLesson: tutorData?.aboutLesson || "",
            intro: tutorData?.intro || "",
            firstLessonFree: tutorData?.firstLessonFree || false,
        },
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const formData = new FormData();
            formData.append("data", JSON.stringify({ ...data, numberOfStudents: Number(data.numberOfStudents) }));
            imageFiles.forEach((file) => formData.append("images", file));

            // const res = await updateTutorProfile(tutorData.user, formData);
            // if (res.success) {
            //     toast.success("Profile updated successfully!");
            // }
        } catch (err) {
            console.log(err);
            toast.error("Failed to update profile");
        }
    };

    return (
        <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl mx-auto p-5 my-5">
            <h1 className="text-xl font-semibold">Update Your Tutor Profile</h1>
            <p className="font-extralight text-sm text-gray-600">
                Keep your profile updated to attract more students!
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField control={form.control} name="location" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Location</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="rate" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hourly Rate</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="responseTime" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Response Time</FormLabel>
                                <FormControl><Input {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="numberOfStudents" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Number of Students</FormLabel>
                                <FormControl><Input type="number" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>

                    <FormField control={form.control} name="about" render={({ field }) => (
                        <FormItem>
                            <FormLabel>About</FormLabel>
                            <FormControl><Textarea className="h-24" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="aboutLesson" render={({ field }) => (
                        <FormItem>
                            <FormLabel>About Lessons</FormLabel>
                            <FormControl><Textarea className="h-24" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="intro" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Introduction</FormLabel>
                            <FormControl><Textarea className="h-24" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="firstLessonFree" render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Lesson Free</FormLabel>
                            <FormControl>
                                <Input type="checkbox" {...field} checked={field.value} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <div className="mt-4">
                        {imagePreview?.length > 0 ? (
                            <ImagePreviewer setImageFiles={setImageFiles} imagePreview={imagePreview} setImagePreview={setImagePreview} />
                        ) : (
                            <TLImageUploader setImageFiles={setImageFiles} setImagePreview={setImagePreview} />
                        )}
                    </div>

                    <Button type="submit" className="mt-5 w-full">
                        {isSubmitting ? "Updating..." : "Update Profile"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
