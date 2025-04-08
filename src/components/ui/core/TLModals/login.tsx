'use client';

import { useUser } from '@/context/UserContext';
import { loginUser, registerTutor, registerUser } from '@/services/AuthService';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '../../button';
import { Dialog, DialogContent, DialogTrigger } from '../../dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../../form';
import { Input } from '../../input';
import { Textarea } from '../../textarea';
import TLImageUploader from '../TLImageUploader';
import ImagePreviewer from '../TLImageUploader/ImagePreviewer';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [formMode, setFormMode] = useState<'login' | 'signup' | 'becomeTutor'>('login'); // State to toggle between Login, Sign Up, and Become Tutor
    const { setIsLoading } = useUser();
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);

    const form = useForm();
    const { formState: { isSubmitting } } = form;
    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirectPath");
    const router = useRouter();

    const handleSignupClick = () => setFormMode('signup');
    const handleBecomeTutorClick = () => setFormMode('becomeTutor');
    const handleLoginClick = () => setFormMode('login');

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (formMode === 'signup') {
            try {
                const res = await registerUser({ role: "student", ...data });
                if (res.success) {
                    setIsLoading(true);
                    toast.success(res?.message);
                    onClose();
                    router.push(redirect || "/");
                } else {
                    toast.error(res?.message);
                }
            } catch (error: any) {
                console.log(error);
            }
        } else if (formMode === 'becomeTutor') {
            try {
                const formData = new FormData();
                const dataObject = {
                    email: data.email,
                    password: data.password,
                    name: data.name,
                    location: data.location,
                    rate: data.rate,
                    subject: data.subject,
                    about: data.about,
                    aboutLesson: data.aboutLesson,
                    intro: data.intro,
                };
                formData.append("data", JSON.stringify(dataObject)); // Add the data object

                // Add image files
                imageFiles.forEach((file) => formData.append("images", file));

                const response = await registerTutor(formData);  // Backend call to add the tutor
                if (response.success) {
                    setIsLoading(true);
                    toast.success(response?.message);
                    onClose();
                    router.push(redirect || "/");
                } else {
                    toast.error(response?.message);
                }
            } catch (error: any) {
                console.log(error);
            }
        } else {
            try {
                const res = await loginUser(data);
                if (res.success) {
                    setIsLoading(true);
                    toast.success(res?.message);
                    onClose();
                    router.push(redirect || "/");
                } else {
                    toast.error(res?.message);
                }
            } catch (error: any) {
                console.log(error);
            }
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogTrigger asChild>
                <Button variant="default">Login</Button>
            </DialogTrigger>

            <DialogContent className="max-w-md w-full bg-white p-8 md:py-8 md:px-16 rounded-lg shadow-xl">
                {/* Logo */}
                <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-4">TL</div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                        {formMode === 'signup' ? 'Sign up' : formMode === 'becomeTutor' ? 'Become a Tutor' : 'Log in'}
                    </h3>
                </div>

                {/* Form Section */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                        {formMode === 'signup' || formMode === 'becomeTutor' ? (
                            <>
                                {/* Sign Up / Become a Tutor Form */}
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input {...field} type="text" placeholder="Full name" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input {...field} type="email" placeholder="Enter your email" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                <FormField control={form.control} name="password" render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input {...field} type="password" placeholder="Password" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                {formMode === 'becomeTutor' && (
                                    <>
                                        {/* Additional Fields for Becoming a Tutor */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField control={form.control} name="location" render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input {...field} type="text" placeholder="Location" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={form.control} name="rate" render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input {...field} type="text" placeholder="Hourly Rate" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={form.control} name="subject" render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input {...field} type="text" placeholder="Subject" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>

                                        {/* Text Areas for Additional Tutor Information */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                            <FormField control={form.control} name="about" render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Textarea {...field} className="w-full" placeholder="About you" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={form.control} name="intro" render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Textarea {...field} className="w-full" placeholder="Introduction to your tutoring" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={form.control} name="aboutLesson" render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Textarea {...field} className="w-full" placeholder="About your lessons" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            {/* Image Upload Field */}
                                            <div className="mt-0">
                                                {imagePreview?.length > 0 ? (
                                                    <ImagePreviewer setImageFiles={setImageFiles} imagePreview={imagePreview} setImagePreview={setImagePreview} />
                                                ) : (
                                                    <TLImageUploader setImageFiles={setImageFiles} setImagePreview={setImagePreview} />
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}

                                <Button type="submit" className="w-full bg-primary text-white py-3 rounded-md mt-6" disabled={isSubmitting}>
                                    {formMode === 'signup' ? 'Sign up' : formMode === 'becomeTutor' ? 'Become a Tutor' : 'Log in'}
                                </Button>
                            </>
                        ) : (
                            <>
                                {/* Login Form */}
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input {...field} type="email" placeholder="Enter your email" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                <FormField control={form.control} name="password" render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input {...field} type="password" placeholder="Password" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white py-3 rounded-md">
                                    {isSubmitting ? "Logging in..." : "Login"}
                                </Button>
                            </>
                        )}

                        <div className="text-center mt-4">
                            {formMode !== 'signup' && (
                                <span className="text-sm text-gray-500">
                                    Don&apos;t have an account?{' '}
                                    <a href="#" className="text-primary font-semibold" onClick={handleSignupClick}>
                                        Sign up
                                    </a>
                                </span>
                            )}
                            {formMode !== 'becomeTutor' && (
                                <div className="text-sm text-gray-500 mt-4">
                                    Want to teach?{' '}
                                    <a href="#" className="text-primary font-semibold" onClick={handleBecomeTutorClick}>
                                        Become a Tutor
                                    </a>
                                </div>
                            )}
                            {formMode !== 'becomeTutor' && formMode === 'signup' && (
                                <>
                                    <div className="text-sm text-gray-500 mt-4">
                                        Already have account?{' '}
                                        <a href="#" className="text-primary font-semibold" onClick={handleLoginClick}>
                                            Login
                                        </a>
                                    </div></>
                            )}
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
