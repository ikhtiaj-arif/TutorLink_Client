'use client';

import { loginUser } from '@/services/AuthService';
import { Apple, Twitter } from 'lucide-react';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '../../button';
import { Dialog, DialogContent, DialogTrigger } from '../../dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../../form';
import { Input } from '../../input';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [isSignup, setIsSignup] = useState<boolean>(false); // State to toggle between Login and Sign Up

    const handleSignupClick = () => {
        setIsSignup(true); // Switch to Sign up form
    };

    const handleLoginClick = () => {
        setIsSignup(false); // Switch to Login form
    };
    const form = useForm();
    const { formState: { isSubmitting } } = form

    // const [reCaptchaStatus, setReCaptchaStatus] = useState(false)

    // const searchParams = useSearchParams()
    // const redirect = searchParams.get("redirectPath")
    // const router = useRouter()




    // const handleRecaptcha = async (value: string | null) => {
    //     try {
    //         const res = await reCaptchaTokenVerification(value!)
    //         if (res.success) {
    //             setReCaptchaStatus(true)

    //         } else {
    //             setReCaptchaStatus(false)

    //         }

    //     } catch (error: any) {
    //         console.log(error);
    //     }
    // }


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);


        try {
            const res = await loginUser(data)
            if (res.success) {
                toast.success(res?.message)

            } else {
                toast.error(res?.message)
            }
        } catch (error: any) {
            console.log(error);
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
                        {isSignup ? 'Sign up' : 'Log in'}
                    </h3>
                </div>

                {/* Form Section */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                        {isSignup ? (
                            <>
                                {/* Sign Up Form */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>

                                            <FormControl>
                                                <Input {...field} type="name" placeholder="Full name" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>

                                            <FormControl>
                                                <Input {...field} type="email" placeholder="Enter your email" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>

                                            <FormControl>
                                                <Input {...field} type="password" placeholder="Password" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full bg-primary text-white py-3 rounded-md">
                                    Sign up
                                </Button>
                                <div className="text-center mt-4">
                                    <span className="text-sm text-gray-500">
                                        Already have an account?{' '}
                                        <a
                                            href="#"
                                            className="text-primary font-semibold"
                                            onClick={handleLoginClick}
                                        >
                                            Log in
                                        </a>
                                    </span>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Login Form */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>

                                            <FormControl>
                                                <Input {...field} type="email" placeholder="Enter your email" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>

                                            <FormControl>
                                                <Input {...field} type="password" placeholder="Password" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full bg-primary text-white py-3 rounded-md">
                                    Login
                                </Button>

                                <div className="flex justify-center items-center space-x-4">
                                    <span className="text-gray-500">or</span>
                                </div>

                                <Button
                                    className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center space-x-2"
                                    variant="outline"
                                >
                                    <Twitter className="text-blue-500 h-6 w-6" />
                                    <span>Log in with Google</span>
                                </Button>

                                <Button
                                    className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center space-x-2"
                                    variant="outline"
                                >
                                    <Apple className="text-black h-6 w-6" />
                                    <span>Log in with Apple</span>
                                </Button>

                                {/* Switch to Sign Up Link */}
                                <div className="mt-4 text-center">
                                    <span className="text-sm text-gray-500">
                                        Don&apos;t have an account?{' '}
                                        <a
                                            href="#"
                                            className="text-primary font-semibold"
                                            onClick={handleSignupClick}
                                        >
                                            Sign up
                                        </a>
                                    </span>
                                </div>
                            </>
                        )}
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
