'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { router } from 'better-auth/api';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, useSearchParams, useRouter } from 'next/navigation';


const Login = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log("data", userData);
        const { data, error } = await authClient.signIn.email({
            email: userData.email, // required
            password: userData.password, // required
        });

        console.log("newUser", data);
        console.log("error", error);
        if (data) {
            router.push(callbackUrl);
        }
        if (error) {
            alert(`status: ${error.status} statusText: ${error.statusText}`)
        }
    }


    return (
        <div className='p-1 py-10'>
            <div className="w-max mx-auto">
                <h2 className="text-center text-2xl font-semibold">Login</h2>
                <p className="text-center text-[#6C696D] mb-6">Sign in to your account</p>

                <Card className="rounded-none border">
                    <Form className="flex w-96 flex-col gap-4 p-2.5 space-y-4" onSubmit={handleLogin} >
                        <TextField
                            isRequired
                            name="email"
                            type="email"

                        >
                            <Label>Email</Label>
                            <Input placeholder="khalid@example.com" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            name="password"
                            type="password"
                            minLength={6}
                            pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <Description>
                               
                            </Description>
                            <FieldError>
                                Your email or password is incorrect. Please try again.
                            </FieldError>
                        </TextField>
                        <div className="flex gap-2">
                            <Button type="submit" className={'w-full rounded-none bg-[#15A1BF]'}>
                                Login
                            </Button>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <hr className="w-full" /> <p className="w-full text-[#6C696D]">Or sign in with</p> <hr className="w-full" />
                        </div>
                        <div className="flex justify-center items-center gap-2 border py-2 cursor-pointer" >
                            <Image src={"https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico"} alt="google" width={20} height={20} />
                            <p>Sign In With Google</p>
                        </div>
                        <p className="text-[#6C696D] text-center">Don`t have any account? <Link href={'/auth/signup'}><span className="text-blue-500">Sign Up</span></Link></p>
                    </Form>
                </Card>
            </div>

        </div>
    );
};

export default Login;