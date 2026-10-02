"use client";

import { signIn, signUp } from "@/app/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";


const signUpPage = () => {

    const hendelGoogleSignIn = async () => {
        const resData = await signIn.social({
            provider: "google",
        });
    };

    

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { data: resData, error } = await signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: '/'
        })
        console.log(resData, error);


    };

    return (
        <main className="relative isolate flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white sm:px-6">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.22),_transparent_55%)]" />
            <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/30 backdrop-blur sm:grid-cols-2">
                <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-700 to-slate-900 p-10 sm:flex lg:p-12">
                    <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute -right-10 -top-10 size-52 rounded-full border border-white/10" />
                    <Link href="/" className="relative text-lg font-bold tracking-wide text-white">ACME</Link>
                    <div className="relative max-w-sm">
                        <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-blue-100">
                            START SOMETHING GREAT
                        </span>
                        <h1 className="text-4xl font-semibold leading-tight tracking-tight lg:text-5xl">
                            Make room for what&apos;s next.
                        </h1>
                        <p className="mt-5 text-base leading-7 text-blue-100/80">
                            Create your account and bring your projects, ideas, and team together.
                        </p>
                    </div>
                    <p className="relative text-sm text-blue-100/60">Your next chapter starts here.</p>
                </section>

                <section className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
                    <Form className="flex w-full max-w-md flex-col gap-4" onSubmit={onSubmit}>
                        <div className="mb-1">
                            <p className="text-sm font-medium text-blue-400 sm:hidden">ACME</p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">Create account</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Get started with your free account.
                            </p>
                        </div>

                        <TextField
                            className="w-full"
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-sm font-medium text-slate-200">Name</Label>
                            <Input className="w-full" placeholder="John Doe" />
                            <FieldError />
                        </TextField>
                        <TextField
                            className="w-full"
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-sm font-medium text-slate-200">Email address</Label>
                            <Input className="w-full" placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        <TextField
                            className="w-full"
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-sm font-medium text-slate-200">Password</Label>
                            <Input className="w-full" placeholder="Enter your password" />
                            <Description className="text-xs text-slate-400">
                                At least 8 characters, including 1 uppercase letter and 1 number.
                            </Description>
                            <FieldError />
                        </TextField>

                        <div className="flex items-center justify-between gap-3 pt-1">
                            <Button
                                className="min-h-11 flex-1 rounded-xl bg-blue-600 font-medium text-white transition hover:bg-blue-500"
                                type="submit"
                            >
                                <Check />
                                Create account
                            </Button>
                            <Button className="min-h-11 rounded-xl border border-white/10 px-5 text-slate-300 hover:bg-white/5" type="reset" variant="secondary">
                                Reset
                            </Button>
                        </div>

                        <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-slate-500">
                            <span className="h-px flex-1 bg-white/10" />
                            or continue with
                            <span className="h-px flex-1 bg-white/10" />
                        </div>
                        <Button
                            className="min-h-11 w-full rounded-xl border border-white/10 bg-white/5 font-medium text-slate-200 transition hover:bg-white/10"
                            onClick={hendelGoogleSignIn}
                        >
                            Sign up with Google
                        </Button>
                        <p className="pt-1 text-center text-sm text-slate-400">
                            Already have an account?{" "}
                            <Link className="font-medium text-blue-400 hover:text-blue-300" href="/sign-in">
                                Sign in
                            </Link>
                        </p>
                    </Form>
                </section>
            </div>
        </main>
    );
};

export default signUpPage;